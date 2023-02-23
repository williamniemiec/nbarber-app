import React from 'react';
import SignInput from '../FormInput';
import LockIcon from '../../assets/images/svg/lock.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PasswordInput = ({ passwordField, setPasswordField }: any) => (
  <SignInput 
    placeholder='Senha' 
    Icon={LockIcon} 
    secure={true} 
    onChangeText={setPasswordField} 
    value={passwordField} 
  />
);

export default PasswordInput;
