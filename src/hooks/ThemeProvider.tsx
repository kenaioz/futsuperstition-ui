import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeColors {
  BODY: string;
  TEXT: string;
  INPUT: string;
  CARDBG: string;
  TABLEHEADER: string;
  TABLEBODY: string;
  TABLEBODYEVEN: string;
  WHITE: string;
  TOOLTIP: string;
  FAB_SHADOW: string;
  HIGHLIGHT: string;
  HIGHLIGHT_HOVER: string;
}

interface ThemeProviderType {
  theme: {
    name: string;
    COLORS: ThemeColors;
  };
  toggleTheme: () => void;
}

const lightTheme = {
  name: "lightTheme",
  COLORS: {
    BODY: "#F0F0F0",
    TEXT: "#282828",
    INPUT: "#f1f0f0",

    CARDBG: "#FFFF",

    TABLEHEADER: "#f1f0f0",
    TABLEBODY: "transparent",
    TABLEBODYEVEN: "#f1f0f0",

    WHITE: "#FFF",

    TOOLTIP: "#292c33",
    FAB_SHADOW: "#d3d3d3",

    HIGHLIGHT: "#25A519",
    HIGHLIGHT_HOVER: "#0b7c0199",
  },
};
const darkTheme = {
  name: "darkTheme",
  COLORS: {
    BODY: "#0F0F0F",
    TEXT: "#F0F0F0",
    INPUT: "#111111",

    CARDBG: "#1f1f1f",

    TABLEHEADER: "#111111",
    TABLEBODY: "transparent",
    TABLEBODYEVEN: "#111111",

    WHITE: "#FFF",

    TOOLTIP: "#292c33",
    FAB_SHADOW: "#2b2b2b",

    HIGHLIGHT: "#25A519",
    HIGHLIGHT_HOVER: "#0b7c0199",
  },
};

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const storedThemeName = localStorage.getItem("@futsuperstition:theme");
  const initTheme = storedThemeName === darkTheme.name ? darkTheme : lightTheme;

  const [theme, setTheme] = useState<ThemeProviderType["theme"]>(initTheme);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("@futsuperstition:theme", theme.name);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const contextValue: ThemeProviderType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
