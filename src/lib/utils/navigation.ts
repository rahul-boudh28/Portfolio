// src/lib/utils/navigation.ts

/**
 * Calculates navbar offset and smoothly scrolls to the target element on the current page.
 */
export const smoothScrollToElement = (targetId: string): boolean => {
  if (typeof window === "undefined") return false;
  const elem = document.getElementById(targetId);
  if (!elem) return false;

  const navbarOffset = 76; // Offset for sticky navbar + breathing room
  const targetPosition = elem.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  window.history.pushState(null, "", `#${targetId}`);
  return true;
};

/**
 * Unified Navigation:
 * - If already on the homepage -> Smoothly scrolls to section.
 * - If on another route (e.g. /resume) -> Navigates to /#section, triggering smooth scroll on load.
 */
export const navigateToSection = (
  targetId: string,
  pathname: string,
  router: { push: (url: string) => void }
) => {
  const isHomepage = pathname === "/" || pathname === "" || pathname.endsWith("/Portfolio") || pathname.endsWith("/Portfolio/");

  if (isHomepage) {
    smoothScrollToElement(targetId);
  } else {
    // Navigate back to home with the hash
    router.push(`/#${targetId}`);
  }
};