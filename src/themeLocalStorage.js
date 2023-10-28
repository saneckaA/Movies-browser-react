const localStorageKey = "theme";

export const saveThemeInLocalStorage = theme => 
localStorage.setItem("theme", JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
JSON.parse(localStorage.getItem(localStorageKey)) || [];