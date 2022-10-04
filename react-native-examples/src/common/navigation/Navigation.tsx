import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "../../auth/screen/Login";
import Main from "../screen/Main";

export interface NavigationProps {
  navigation: any;
}

export const ScreenNames = {
  LOGIN: 'Login',
  MAIN: 'Main',
};

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}