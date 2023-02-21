import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';
import SignInput from '../../components/SignInput';
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
    <SignInButton onPress={onSignIn}/>
  </View>
);

export default SignInForm;

const EmailInput = ({ emailField, setEmailField }: any) => (
  <SignInput 
    placeholder='Email' 
    Icon={EmailIcon} 
    onChangeText={(text: string) => handleChangeEmail(text, setEmailField)} 
    value={emailField} 
  />
);

const PasswordInput = ({ passwordField, setPasswordField }: any) => (
  <SignInput 
    placeholder='Senha' 
    Icon={LockIcon} 
    secure={true} 
    onChangeText={(text: string) => handleChangePassword(text, setPasswordField)} 
    value={passwordField} 
  />
);

const SignInButton = ({ onPress }: any) => (
  <TouchableHighlight 
    underlayColor='#ddd' 
    style={Style.customButton} 
    onPress={onPress}
  >
    <Text style={Style.customButtonText}>LOGIN</Text>
  </TouchableHighlight>
);


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleChangeEmail(text: string, setEmailField: any) {
  setEmailField(text);
};

function handleChangePassword(text: string, setPasswordField: any) {
  setPasswordField(text);
};
