import useThemeStore from "../store/themeStore";
import { themes } from "../constants/Themes";

const useTheme = (): {
  currentTheme: keyof typeof themes;
  handleThemeChange: (theme: keyof typeof themes) => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  themes: typeof themes;
} => {
  const { currentTheme, isDarkMode, setTheme, toggleDarkMode } =
    useThemeStore();

  return {
    currentTheme,
    handleThemeChange: setTheme,
    toggleDarkMode,
    isDarkMode,
    themes,
  };
};

export default useTheme;
