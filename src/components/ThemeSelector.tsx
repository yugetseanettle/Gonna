import React from "react";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, useToggleGroup } from "@ark-ui/react/toggle-group";
import useTheme from "../hooks/useTheme";
import { css } from "../../styled-system/css";

const ThemeSelector = () => {
  const { themes, handleThemeChange, isDarkMode, toggleDarkMode } = useTheme();
  const toggleGroup = useToggleGroup();

  return (
    <div
      className={css({
        display: "flex",
        height: "4rem",
        alignItems: "center",
        bgColor: "primary",
        color: "stone.50",
      })}
    >
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <Moon /> : <Sun />}
      </button>
      <ToggleGroup.RootProvider value={toggleGroup}>
        {Object.keys(themes).map((theme) => (
          <ToggleGroup.Item
            key={theme}
            value={theme}
            onClick={() => handleThemeChange(theme as keyof typeof themes)}
          >
            {theme}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.RootProvider>
    </div>
  );
};

export default ThemeSelector;
