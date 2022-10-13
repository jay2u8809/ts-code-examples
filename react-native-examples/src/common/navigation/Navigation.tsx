import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "../../auth/screen/Login";
import NavigationTab from "./NavigationTab";
import ResetPassword from "../../auth/screen/ResetPassword";

export interface INavigationProps {
  navigation: any;
}

export const ScreenNames = {
  LOGIN: 'Login',
  MAIN: 'Main',
  RESET_PASSWORD: 'ResetPassword',
};

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Main' component={NavigationTab} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}