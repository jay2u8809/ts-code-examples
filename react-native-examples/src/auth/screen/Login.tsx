import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScreenNames} from '../../common/navigation/Navigation';
import {backgroundColorByDarkMode} from "../../common/styles/back-ground.styles";
import {barStyleByDarkMode} from "../../common/styles/bar.styles";
import {LoginService} from '../service/login.service';

const TAG = 'LoginScreen';

/**
 * Login Screen
 * @param navigation
 * @constructor
 */
const Login = ({navigation}: any) => {
  const [userId, setUserId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLoginBtn = async () => {
    // console.debug(TAG, 'handle-login-btn', userId, password);
    const service: LoginService = new LoginService();
    const result = await service.login(userId, password);
    console.log(TAG, 'login-result', result);
    if (result) {
      handleResetBtn();
      navigation.navigate(ScreenNames.MAIN);
      return;
    }
    console.log(TAG, 'login-fail');
  };

  const handleResetBtn = () => {
    // console.debug(TAG, 'handle-reset-btn-pre', userId, password);
    setUserId('');
    setPassword('');
  };

  return (
    <SafeAreaView style={backgroundColorByDarkMode()}>
      <StatusBar
        barStyle={barStyleByDarkMode()}
        backgroundColor={backgroundColorByDarkMode().backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundColorByDarkMode()}>
        {/*TODO Login Logo*/}
        <View
          style={[backgroundColorByDarkMode(), styles.sectionContainer]}>
          <TextInput
            placeholder={'ID'}
            nativeID={'userId'}
            value={userId}
            style={[
              styles.sectionTitle, {
                color : useColorScheme() === 'dark' ? Colors.white : Colors.black,
              },
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-id', event);
              setUserId(event);
            }}
          >
          </TextInput>
          <TextInput
            placeholder={'PASSWORD'}
            nativeID={'password'}
            value={password}
            secureTextEntry={true}
            style={[
              styles.sectionTitle, {
                color : useColorScheme() === 'dark' ? Colors.white : Colors.black,
              }
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-password', event);
              setPassword(event);
            }}
            // onTextInput={(event: any) => {
            //   // console.debug(TAG, 'input-password', event);
            // }}
          >
          </TextInput>
          <Button title={'LOGIN'} onPress={handleLoginBtn} />
          <Button title={'RESET'} onPress={handleResetBtn}></Button>
          {/*<LoginInput*/}
          {/*  navigation={navigation}*/}
          {/*/>*/}
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