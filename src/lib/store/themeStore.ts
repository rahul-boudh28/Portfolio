// src/lib/store/themeStore.ts
import { create } from 'zustand';

type ThemeMode = 'workspace' | 'soc';

interface ThemeState {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'workspace', // Default OS mode is Developer Workspace
  toggleMode: () => set((state) => ({ mode: state.mode === 'workspace' ? 'soc' : 'workspace' })),
  setMode: (mode) => set({ mode }),
}));