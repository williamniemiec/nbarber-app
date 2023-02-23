import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const EmailInput = ({ emailField, setEmailField }: any) => (
  <SignInput 
    placeholder='Email' 
    Icon={EmailIcon} 
    onChangeText={setEmailField} 
    value={emailField} 
  />
);

export default EmailInput;
