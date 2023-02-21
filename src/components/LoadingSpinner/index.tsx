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
