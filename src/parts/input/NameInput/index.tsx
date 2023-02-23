import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const NameInput = ({ nameField, setNameField }: any) => (
  <SignInput 
    placeholder='Nome' 
    Icon={EmailIcon} 
    onChangeText={setNameField} 
    value={nameField} 
  />
);

export default NameInput;
