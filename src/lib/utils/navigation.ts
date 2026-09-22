// src/lib/utils/navigation.ts

/**
 * High-performance 60fps cubic-bezier smooth scroll.
 * Does not rely on fragile browser CSS flags and never jumps.
 */
export function smoothScrollTo(targetPosition: number, duration: number = 750): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const distance = targetPosition - startPosition;

    if (Math.abs(distance) < 2) {
      resolve();
      return;
    }

    let startTime: number | null = null;

    function step(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutCubic curve for luxury feel
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, Math.round(startPosition + distance * ease));

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetPosition);
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

/**
 * Smoothly scrolls to an element on the current page, accounting for the sticky header.
 */
export async function smoothScrollToElement(targetId: string, updateUrl: boolean = true): Promise<boolean> {
  if (typeof window === "undefined") return false;

  const cleanId = targetId.replace(/^#/, "");
  const elem = document.getElementById(cleanId);
  if (!elem) return false;

  const navbarOffset = 76; // 64px header + 12px breathing room
  const elemRect = elem.getBoundingClientRect();
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  const targetY = Math.max(0, elemRect.top + currentScrollY - navbarOffset);

  await smoothScrollTo(targetY, 750);

  if (updateUrl && window.location.hash !== `#${cleanId}`) {
    window.history.pushState(null, "", `#${cleanId}`);
  }

  return true;
}

/**
 * Unified Navigation Handler:
 * - On Homepage: Smoothly scrolls to section.
 * - On Other Pages (e.g., /resume): Navigates to /#section, where the homepage listener handles smooth scrolling.
 * - Never leaves invalid hashes like /resume#about.
 */
export function navigateToSection(
  targetId: string,
  pathname: string,
  router: { push: (url: string) => void }
) {
  const cleanId = targetId.replace(/^#/, "");
  const isHomepage = pathname === "/" || pathname === "" || pathname.endsWith("/Portfolio") || pathname.endsWith("/Portfolio/");

  if (isHomepage) {
    smoothScrollToElement(cleanId, true);
  } else {
    // Navigate cleanly to homepage with the section hash
    router.push(`/#${cleanId}`);
  }
}