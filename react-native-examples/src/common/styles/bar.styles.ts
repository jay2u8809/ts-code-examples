import {StatusBarStyle, useColorScheme} from "react-native";

export const barStyleByDarkMode = (): StatusBarStyle => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? 'light-content' : 'dark-content';
};