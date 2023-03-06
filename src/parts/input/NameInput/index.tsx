import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const NameInput = ({ name, setName }: any) => (
  <SignInput 
    placeholder='Nome' 
    Icon={EmailIcon} 
    onChangeText={setName} 
    value={name} 
  />
);

export default NameInput;
