import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, View} from 'react-native';
import {ScreenNames} from '../../common/navigation/Navigation';
import {ColorModeStyles} from "../../common/styles/color-mode.styles";
import {LoginService} from '../service/login.service';
import LoginInput from '../component/LoginInputComponent';
import {ButtonViews} from '../../common/component/ButtonComponent';

const TAG = 'LoginScreen';

const words = {
  ID: 'id',
  PASSWORD: 'password',
};

/**
 * Login Screen
 * @param navigation
 * @constructor
 */
const Login = ({navigation}: any) => {
  const [userId, setUserId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLoginBtn = async (): Promise<void> => {
    // console.debug(TAG, 'handle-login-btn', userId, password);
    const result = await LoginService.login(userId, password);
    console.log(TAG, 'login-result', result);
    if (result) {
      handleResetBtn();
      navigation.navigate(ScreenNames.MAIN);
      return;
    }
    console.log(TAG, 'login-fail');
  };

  const handleResetBtn = (): void => {
    console.debug(TAG, 'handle-reset-btn-pre', userId, password);
    setUserId('');
    setPassword('');
    navigation.navigate(ScreenNames.RESET_PASSWORD);
  };

  return (
    <SafeAreaView style={ColorModeStyles.viewBackgroundColorByMode()}>
      <StatusBar
        barStyle={ColorModeStyles.barStyleByMode()}
        backgroundColor={ColorModeStyles.viewBackgroundColorByMode().backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={ColorModeStyles.viewBackgroundColorByMode()}>
        {/*TODO Login Logo*/}
        <View
          style={[styles.sectionContainer, ColorModeStyles.viewBackgroundColorByMode()]}>
          {/* id input */}
          <TextInput
            placeholder={words.ID.toUpperCase()}
            nativeID={words.ID}
            value={userId}
            style={[
              styles.sectionTitle, ColorModeStyles.textColorByMode()
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-id', event);
              setUserId(event);
            }}
          >
          </TextInput>
          {/* password input */}
          <TextInput
            placeholder={words.PASSWORD.toUpperCase()}
            nativeID={words.PASSWORD}
            value={password}
            secureTextEntry={true}
            style={[
              styles.sectionTitle, ColorModeStyles.textColorByMode()
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-password', event);
              setPassword(event);
            }}
          >
          </TextInput>
          {/* Buttons */}
          {
            ButtonViews.generateButtons([
              {key: 'login', method: handleLoginBtn},
              {key: 'reset', method: handleResetBtn},
            ])
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;