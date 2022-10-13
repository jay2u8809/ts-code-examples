import {Colors} from "react-native/Libraries/NewAppScreen";
import {StatusBarStyle, TextStyle, useColorScheme, ViewStyle} from "react-native";
import {ColorSchemeNameType} from "../utils/enum/ColorSchemeNameType";

export const ColorModeStyles = {
  viewBackgroundColorByMode: (): ViewStyle => {
    const isDarkMode = useColorScheme() === ColorSchemeNameType.DARK;
    return {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }
  },
  
  textColorByMode: (): TextStyle => {
    const isDarkMode = useColorScheme() === ColorSchemeNameType.DARK;
    return {
      color : isDarkMode ? Colors.white : Colors.black,
    }
  },

  barStyleByMode: (): StatusBarStyle => {
    const isDarkMode = useColorScheme() === 'dark';
    return isDarkMode ? 'light-content' : 'dark-content';
  },
}