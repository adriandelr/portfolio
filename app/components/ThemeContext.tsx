import * as React from "react";
import { Platform } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { lightColors, darkColors } from "./colorThemes";

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: (scheme: string) => {},
});

export const ThemeProvider = (props: any) => {
  // Get data of saved colorScheme
  let localData_colorScheme: any;
  if (Platform.OS === "web") {
    localData_colorScheme
      ? (localData_colorScheme = localStorage.getItem("colorScheme"))
      : (localData_colorScheme = "light");
  }

  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = localData_colorScheme
    ? Platform.OS === "web" && localData_colorScheme
    : useColorScheme(); // Can be dark | light | no-preference

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    // Set scheme to local values
    if (localData_colorScheme) {
      setIsDark(localData_colorScheme === "dark");
    } else {
      setIsDark(colorScheme === "dark");
    }
  }, [colorScheme]);

  const defaultTheme: any = {
    isDark,
    // Chaning color schemes according to theme
    colors: isDark ? darkColors : lightColors,
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: (scheme: string) => {
      setIsDark(scheme === "dark");
      // Save scheme to local storage
      if (Platform.OS === "web") localStorage.setItem("colorScheme", scheme);
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
