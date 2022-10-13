import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ReadBarcode from "../../barcode/screen/ReadBarcode";
import ReadQrCode from "../../barcode/screen/ReadQrCode";
import {INavigationProps} from "./Navigation";

export interface INavigationTabProps extends INavigationProps {
}

export const ScreenTabNames = {
  ReadBarcode: 'ReadBarcode',
  ReadQrCode: 'ReadQrCode',
};

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='ReadBarcode' component={ReadBarcode} />
      <Tab.Screen name='ReadQrCode' component={ReadQrCode} />
    </Tab.Navigator>
  );
}