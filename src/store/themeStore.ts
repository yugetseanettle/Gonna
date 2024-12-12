import { create } from "zustand";
import Cookies from "js-cookie";
import { themes } from "../constants/Themes";

interface ThemeState {
  currentTheme: keyof typeof themes;
  isDarkMode: boolean;
  setTheme: (theme: keyof typeof themes) => void;
  toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: (Cookies.get("theme") as keyof typeof themes) || "indigo",
  isDarkMode: Cookies.get("color-mode") === "dark" || false,
  setTheme: (theme: keyof typeof themes) => {
    set({ currentTheme: theme });
    Cookies.set("theme", theme);
    document.documentElement.setAttribute("data-theme", themes[theme]);
  },
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      const theme = newMode ? "dark" : "light";
      Cookies.set("color-mode", theme);
      document.documentElement.setAttribute("data-color-mode", theme);
      return { isDarkMode: newMode };
    });
  },
}));

export default useThemeStore;
