"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const useThemeDetector = () => {
  const getDarkThemeActive = () => {
    if (typeof window === "undefined") return undefined;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  const [isDarkTheme, setIsDarkTheme] = useState(getDarkThemeActive());  
  const mqListener = (e => {
      setIsDarkTheme(e.matches);
  });
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
}

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = useThemeDetector();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme(isDarkTheme ? "dark" : "light");
  } , [isDarkTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <label
        className="theme-switcher-label"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
      </label>
    </>
  );
};

export default ThemeSwitch;
