import { useCallback, useLayoutEffect, useState } from "react";

export type Theme = "dark" | "light" | "auto";

export function ReactDeviceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M4 8c0-.971.002-1.599.064-2.061c.059-.434.153-.57.229-.646c.076-.076.212-.17.646-.229C5.4 5.002 6.029 5 7 5h10c.971 0 1.599.002 2.061.064c.434.059.57.153.646.229c.076.076.17.212.229.646C19.998 6.4 20 7.029 20 8v8H4zm-.333 8C2.747 16 2 16.746 2 17.667A2.333 2.333 0 0 0 4.333 20h15.334A2.333 2.333 0 0 0 22 17.667c0-.92-.746-1.667-1.667-1.667z"
      />
    </svg>
  );
}

export function ReactSunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"
      />
    </svg>
  );
}

export function ReactMoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M244 96a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12V72a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12M144 60h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24m75.81 90.38A12 12 0 0 1 222 162.3A100 100 0 1 1 93.7 34a12 12 0 0 1 15.89 13.6A85.12 85.12 0 0 0 108 64a84.09 84.09 0 0 0 84 84a85.22 85.22 0 0 0 16.37-1.59a12 12 0 0 1 11.44 3.97M190 172A108.13 108.13 0 0 1 84 66a76 76 0 1 0 106 106"
      />
    </svg>
  );
}

export default function ToggleTheme() {
  const [theme, setTheme] = useState<Theme>("auto");
  const selectTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    if (newTheme === "light") document.documentElement.classList.remove("dark");
    if (newTheme === "auto") {
      const { matches: darkTheme } = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      if (darkTheme) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
    setTheme(newTheme);
  }, []);
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const value = e.target.value as Theme;
      selectTheme(value);
    },
    []
  );
  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem("theme") as Theme | undefined;
    setTheme(currentTheme ?? "auto");
  }, []);
  return (
    <div className="flex items-center w-20 cursor-pointer">
      <label htmlFor="select-theme" className="cursor-pointer">
        {theme === "auto" ? (
          <ReactDeviceIcon />
        ) : theme === "dark" ? (
          <ReactMoonIcon />
        ) : (
          <ReactSunIcon />
        )}
      </label>
      <select
        className="flex-1 pl-1 outline-none cursor-pointer border-none bg-transparent"
        id="select-theme"
        value={theme}
        onChange={handleChange}
      >
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
