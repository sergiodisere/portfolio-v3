import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setIsDarkMode(true)
    } else {
      setTheme("light");
      setIsDarkMode(false)

    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return { handleThemeSwitch, theme, isDarkMode };
};

export default useTheme;
