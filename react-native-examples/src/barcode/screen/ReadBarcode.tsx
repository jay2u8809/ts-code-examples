import {ScrollView, Text, View} from "react-native";
import React from "react";
import {NavigationTabProps} from "../../common/navigation/NavigationTab";

const TAG = 'ReadBarcodeScreen';

const ReadBarcode = ({navigation}: NavigationTabProps) => {
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

export default ReadBarcode;