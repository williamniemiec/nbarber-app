/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Alert } from 'react-native';


function exceptionHandler(error: Error, isFatal: boolean) {
  Alert.alert('Error: ' + error);
}

export default exceptionHandler;
