import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icons

const DarkModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <label className="toggle-switch">
      <input
        id="darktoggle"
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        aria-label="Toggle Dark/Light Mode"
      />
      <span className="slider round">
        <FiSun className={`icon sun ${isDark ? "hidden" : ""}z-10`} />
        <FiMoon className={`icon moon ${isDark ? "" : "hidden"}z-10`} />
      </span>
    </label>
  );
};

export default DarkModeToggle;
