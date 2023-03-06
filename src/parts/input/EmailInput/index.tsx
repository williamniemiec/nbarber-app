import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const EmailInput = ({ email, setEmail }: any) => (
  <SignInput 
    placeholder='Email' 
    Icon={EmailIcon} 
    onChangeText={setEmail} 
    value={email} 
  />
);

export default EmailInput;
