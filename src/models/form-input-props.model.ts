/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from "react-native-svg";


interface FormInputProps {

  placeholder: string, 
  onChangeText: (value: string) => void, 
  Icon: React.FC<SvgProps>, 
  secure?: boolean, 
  value: string 
}

export default FormInputProps;
