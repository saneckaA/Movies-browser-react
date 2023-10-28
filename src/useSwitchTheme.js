import { useEffect, useState } from "react";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

export const useSwitchTheme = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    useEffect(() => {
      localStorage.setItem("theme",
      JSON.stringify(theme));
    }, [theme]);

    return [
        theme,
        toggleTheme
    ]
};