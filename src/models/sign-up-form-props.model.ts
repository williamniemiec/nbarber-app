/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface SignUpFormProps {
  
  name: string,
  setName: (value: string) => void,
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
  onSignUp: () => void
}

export default SignUpFormProps;
