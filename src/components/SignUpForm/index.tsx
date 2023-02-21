import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';
import SignInput from '../../components/SignInput';
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
    <SignUpButton onPress={onSignUp}/>
  </View>
);

export default SignUpForm;

const NameInput = ({ nameField, setNameField }: any) => (
  <SignInput 
    placeholder='Nome' 
    Icon={EmailIcon} 
    onChangeText={(text: string) => handleChangeName(text, setNameField)} 
    value={nameField} 
  />
);

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

const SignUpButton = ({ onPress }: any) => (
  <TouchableHighlight 
    underlayColor='#ddd' 
    style={Style.customButton} 
    onPress={onPress}
  >
    <Text style={Style.customButtonText}>CADASTRAR</Text>
  </TouchableHighlight>
);


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleChangeName(text: string, setNameField: any) {
  setNameField(text);
};

function handleChangeEmail(text: string, setEmailField: any) {
  setEmailField(text);
};

function handleChangePassword(text: string, setPasswordField: any) {
  setPasswordField(text);
};
