import {ScrollView, Text, View} from "react-native";
import React from "react";
import {NavigationTabProps} from "../../common/navigation/NavigationTab";

const TAG = 'ReadQrCodeScreen';

const ReadQrCode = ({navigation}: NavigationTabProps) => {
  return (
    <ScrollView>
      <View>
        <Text>
          {TAG}
    </Text>
    </View>
    </ScrollView>
  );
}

export default ReadQrCode;