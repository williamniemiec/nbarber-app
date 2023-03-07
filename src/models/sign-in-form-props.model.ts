/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface SignInFormProps {
  
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
  onSignIn: () => void
}

export default SignInFormProps;
