import { useState, createContext } from "react";
const ThemeContext = createContext();

function ThemeProvide({ children }) {
  const [Theme, setTheme] = useState("dark");
  const ToggleTheme = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };
  const value = {
    Theme,
    ToggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvide };
