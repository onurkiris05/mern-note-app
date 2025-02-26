import { create } from "zustand";

interface NavbarState {
  noPositionNavbar: boolean;
  setNoPositionNavbar: (hide: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  noPositionNavbar: false,
  setNoPositionNavbar: (hide) => set({ noPositionNavbar: hide }),
}));
