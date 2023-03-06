import React from 'react';
import { TouchableOpacity } from 'react-native';
import ExpandIcon from '../../assets/images/svg/expand.svg';
import Style from './style';
import CloseButtonProps from '../../../models/close-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CloseButton = ({ onPress }: CloseButtonProps) => (
  <TouchableOpacity style={Style.closeButton} onPress={onPress}>
    <ExpandIcon width='40' height='40' fill='#111111' />
  </TouchableOpacity>
);

export default CloseButton;
