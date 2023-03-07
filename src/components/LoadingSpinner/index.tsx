/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const LoadingSpinner = () => (
  <ActivityIndicator
    style={Style.loading}
    size="large"
    color="#000000"
  />
);

export default LoadingSpinner;
