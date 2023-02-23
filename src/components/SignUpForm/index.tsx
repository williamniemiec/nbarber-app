import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';
import SignInput from '../../parts/input/FormInput';
import EmailInput from '../../parts/input/EmailInput';
import NameInput from '../../parts/input/NameInput';
import PasswordInput from '../../parts/input/PasswordInput';
import FormButton from '../../parts/button/FormButton';
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
