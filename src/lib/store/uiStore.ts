// src/lib/store/uiStore.ts
import { create } from 'zustand';

interface UIState {
  isCommandOpen: boolean;
  toggleCommand: () => void;
  setCommandOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCommandOpen: false,
  toggleCommand: () => set((state) => ({ isCommandOpen: !state.isCommandOpen })),
  setCommandOpen: (isOpen) => set({ isCommandOpen: isOpen }),
}));