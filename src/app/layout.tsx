"use client";

import React, { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";
import { css } from "../../styled-system/css";

const metadata = {
  title: "Calements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, toggleDarkMode, themes } = useTheme("indigo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [themeColor] = useState<keyof typeof themes>("indigo");

  return (
    <html
      lang="en"
      data-theme={themeColor}
      data-color-mode={isDarkMode ? "dark" : "light"}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={css({
          bgColor: "background",
          color: "text",
        })}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
