import React from 'react';
import { Text, View } from 'react-native';
import ModalItem from '../../parts/ModalItem';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalService = ({ user, service }: any) => {
  if (!service) {
    return (<></>);
  }

  return (
    <ModalItem>
      <View style={Style.serviceInfo}>
        <Text style={Style.serviceName}>
          {user.services[service].name}
        </Text>
        <Text style={Style.servicePrice}>
          R$ {user.services[service].price.toFixed(2)}
        </Text>
      </View>
    </ModalItem>
  );
}

export default BarberModalService;
