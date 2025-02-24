import { create } from "zustand";
import { UserModel } from "../models/user";

interface AuthState {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
