import React from "react";
import Auth from "./Auth";
import ThemeSelector from "./ThemeSelector";
import { css } from "../../styled-system/css";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <header
      className={css({
        display: "flex",
        height: "4rem",
        alignItems: "center",
        bgColor: "primary",
        color: "stone.50",
      })}
    >
      <Auth closeModal={() => setIsModalOpen(false)} />
      <ThemeSelector />
    </header>
  );
};

export default Header;
