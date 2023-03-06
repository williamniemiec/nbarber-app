import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';
import EmailInputProps from '../../../models/email-input-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const EmailInput = ({ email, setEmail }: EmailInputProps) => (
  <SignInput 
    placeholder='Email' 
    Icon={EmailIcon} 
    onChangeText={setEmail} 
    value={email} 
  />
);

export default EmailInput;
