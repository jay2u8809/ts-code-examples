import React from "react";
import {ScrollView, Text, View} from "react-native";
import {NavigationProps} from "../navigation/Navigation";

const Main = ({navigation}: NavigationProps) => {
  return (
    <ScrollView>
      <View>
        <Text>
          {'Main'}
        </Text>
      </View>
    </ScrollView>
  );
}

export default Main;