import useThemeStore from "../store/themeStore";
import { themes } from "../constants/Themes";

const useTheme = () => {
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
