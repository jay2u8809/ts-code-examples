import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, View} from 'react-native';
import {ScreenNames} from '../../common/navigation/Navigation';
import {ColorModeStyles} from "../../common/styles/color-mode.styles";
import {LoginService} from '../service/login.service';
import {ButtonViews} from '../../common/component/ButtonComponent';
import {ResetPasswordDto} from '../service/dto/reset-password.dto';

const TAG = 'ResetPasswordScreen';

const words = {
  ID: 'id',
  PASSWORD: 'new password',
  CONFIRM: 'confirm password',
  EMAIL: 'email',
};

/**
 * ResetPassword Screen
 * @param navigation
 * @constructor
 */
const ResetPassword = ({navigation}: any) => {
  const [userId, setUserId] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirm, setConfirm] = React.useState<string>('');

  const handleOkBtn = async (): Promise<void> => {
    // console.debug(TAG, 'handle-ok-btn', userId, email, password, confirm);
    if (!(MethodList.checkPassword(password, confirm) && MethodList.checkPasswordType(password))) {
      setPassword('');
      setConfirm('');
      return;
      // alert popup 
    }
    const dto: ResetPasswordDto = {
      id: userId,
      email: email,
      password: password,
    };
    const result = await LoginService.resetPassword(dto);
    console.log(TAG, 'reset-password-result', result);
    if (result) {
      handleCancelBtn();
      navigation.navigate(ScreenNames.LOGIN);
      return;
    }
    console.log(TAG, 'login-fail');
  };

  const handleCancelBtn = (): void => {
    // console.debug(TAG, 'handle-cancel-btn-pre', userId, email, password, confirm);
    setUserId('');
    setEmail('');
    setPassword('');
    setConfirm('');
    navigation.navigate(ScreenNames.LOGIN);
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
          />
          {/* email input */}
          <TextInput
            placeholder={words.EMAIL.toUpperCase()}
            nativeID={words.EMAIL}
            value={email}
            style={[
              styles.sectionTitle, ColorModeStyles.textColorByMode()
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-email', event);
              setEmail(event);
            }}
          />
          {/* new password input */}
          <TextInput
            placeholder={words.PASSWORD.toUpperCase()}
            nativeID={words.PASSWORD}
            value={password}
            secureTextEntry={true}
            style={[
              styles.sectionTitle, ColorModeStyles.textColorByMode()
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-new-password', event);
              setPassword(event);
            }}
          />
          {/* confirm password input */}
          <TextInput
            placeholder={words.CONFIRM.toUpperCase()}
            nativeID={words.CONFIRM}
            value={confirm}
            secureTextEntry={true}
            style={[
              styles.sectionTitle, ColorModeStyles.textColorByMode()
            ]}
            onChangeText={(event: string) => {
              // console.debug(TAG, 'input-confirm-password', event);
              setConfirm(event);
            }}
          />
          {/* Buttons */}
          {
            ButtonViews.generateButtons([
              {key: 'ok', method: handleOkBtn},
              {key: 'cancel', method: handleCancelBtn},
            ])
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MethodList = {
  checkPasswordType: (password: string): boolean => {
    // TODO
    return true;
  }, 
  checkPassword: (before: string, after: string): boolean => {
    return before === after;
  }
}

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

export default ResetPassword;