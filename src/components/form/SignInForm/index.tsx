/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View } from 'react-native';
import SignInFormProps from '../../../models/sign-in-form-props.model';
import FormButton from '../../../parts/button/FormButton';
import EmailInput from '../../../parts/input/EmailInput';
import PasswordInput from '../../../parts/input/PasswordInput';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignInForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSignIn
}: SignInFormProps) => (
  <View style={Style.inputArea}>
    <EmailInput email={email} setEmail={setEmail} />
    <PasswordInput password={password} setPassword={setPassword} />
    <FormButton onPress={onSignIn} title="LOGAR" />
  </View>
);

export default SignInForm;
