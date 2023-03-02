import React from 'react';
import { View } from 'react-native';
import FormButton from '../../parts/button/FormButton';
import EmailInput from '../../parts/input/EmailInput';
import NameInput from '../../parts/input/NameInput';
import PasswordInput from '../../parts/input/PasswordInput';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignUpForm = ({
  nameField,
  setNameField,
  emailField,
  setEmailField,
  passwordField,
  setPasswordField,
  onSignUp
}: any) => (
  <View style={Style.inputArea}>
    <NameInput nameField={nameField} setNameField={setNameField} />
    <EmailInput emailField={emailField} setEmailField={setEmailField} />
    <PasswordInput passwordField={passwordField} setPasswordField={setPasswordField} />
    <FormButton onPress={onSignUp} title="CADASTRAR" />
  </View>
);

export default SignUpForm;
