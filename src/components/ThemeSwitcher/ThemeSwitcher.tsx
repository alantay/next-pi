"use client";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // to prevent hydration error

  useLayoutEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    let newTheme: "light" | "dark" = "light";
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      newTheme = "dark";
    }
    setTheme(newTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="group flex cursor-pointer items-center gap-2 text-xs"
      onClick={toggleTheme}
    >
      <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
      {theme === "dark" ? (
        <svg
          width="26"
          height="26"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H4M12 3V4M20 12H21M12 20V21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M17.7 17.7L18.4 18.4M6.3 17.7L5.6 18.4M8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12Z"
            stroke="#F0EDF2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="26"
          height="26"
          viewBox="0 -3 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.752 14.002C18.5634 14.4979 17.2879 14.7522 16 14.75C13.4141 14.75 10.9342 13.7228 9.10571 11.8943C7.27723 10.0658 6.25 7.58586 6.25 5C6.25 3.67 6.516 2.403 6.998 1.248C5.22124 1.98878 3.70351 3.23894 2.63612 4.84092C1.56873 6.4429 0.999441 8.32499 1 10.25C1 12.8359 2.02723 15.3158 3.85571 17.1443C5.68419 18.9728 8.16414 20 10.75 20C12.675 20.0006 14.5571 19.4313 16.1591 18.3639C17.7611 17.2965 19.0112 15.7788 19.752 14.002Z"
            stroke="#F0EDF2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
