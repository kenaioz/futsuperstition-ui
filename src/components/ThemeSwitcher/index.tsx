import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/ThemeProvider";

import Switch from "react-switch";

import { Container } from "./styles";

import { RiSunFill, RiMoonFill } from "react-icons/ri";

export function ThemeSwitcher() {
  const { toggleTheme, theme } = useTheme();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(theme.name === "lightTheme" ? false : true);
  }, [theme]);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    toggleTheme();
  };

  return (
    <Container>
      <Switch
        name="themeSwitch"
        onChange={handleChange}
        checked={checked}
        handleDiameter={30}
        height={20}
        width={45}
        onColor="#888888"
        checkedIcon={false}
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <RiMoonFill color="black" />
          </div>
        }
        offColor="#888888"
        uncheckedIcon={false}
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <RiSunFill color="black" />
          </div>
        }
      />
    </Container>
  );
}
