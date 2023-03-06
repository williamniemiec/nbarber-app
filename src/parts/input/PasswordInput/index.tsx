import React from 'react';
import SignInput from '../FormInput';
import LockIcon from '../../assets/images/svg/lock.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PasswordInput = ({ password, setPassword }: any) => (
  <SignInput 
    placeholder='Senha' 
    Icon={LockIcon} 
    secure={true} 
    onChangeText={setPassword} 
    value={password} 
  />
);

export default PasswordInput;
