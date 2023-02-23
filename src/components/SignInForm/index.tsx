import React from 'react';
import { View } from 'react-native';
import FormButton from '../../parts/button/FormButton';
import EmailInput from '../../parts/input/EmailInput';
import PasswordInput from '../../parts/input/PasswordInput';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignInForm = ({
  emailField,
  setEmailField,
  passwordField,
  setPasswordField,
  onSignIn
}: any) => (
  <View style={Style.inputArea}>
    <EmailInput emailField={emailField} setEmailField={setEmailField} />
    <PasswordInput passwordField={passwordField} setPasswordField={setPasswordField} />
    <FormButton onPress={onSignIn} title="LOGAR" />
  </View>
);

export default SignInForm;
