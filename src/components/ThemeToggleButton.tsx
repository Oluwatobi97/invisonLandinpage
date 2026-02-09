import { useEffect, useState } from "react";
import { toggleTheme } from "../utils/theme";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark";
    setIsDark(current);
  }, []);

  const handleClick = () => {
    toggleTheme();
    const current =
      document.documentElement.getAttribute("data-theme") === "dark";
    setIsDark(current);
  };

  return (
    <button
      onClick={handleClick}
      className="
        px-4 py-2 rounded-lg
        border border-[var(--border-color)]
        text-sm font-medium
      "
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default ThemeToggleButton;

