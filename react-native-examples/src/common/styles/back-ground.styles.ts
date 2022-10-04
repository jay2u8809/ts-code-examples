import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme, ViewStyle} from "react-native";

export const backgroundColorByDarkMode = (): ViewStyle => {
  const isDarkMode = useColorScheme() === 'dark';
  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
};

