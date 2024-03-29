/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View } from 'react-native';
import SignUpFormProps from '../../../models/sign-up-form-props.model';
import FormButton from '../../../parts/button/FormButton';
import EmailInput from '../../../parts/input/EmailInput';
import NameInput from '../../../parts/input/NameInput';
import PasswordInput from '../../../parts/input/PasswordInput';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignUpForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onSignUp
}: SignUpFormProps) => (
  <View style={Style.inputArea}>
    <NameInput name={name} setName={setName} />
    <EmailInput email={email} setEmail={setEmail} />
    <PasswordInput password={password} setPassword={setPassword} />
    <FormButton onPress={onSignUp} title="SIGN UP" />
  </View>
);

export default SignUpForm;
