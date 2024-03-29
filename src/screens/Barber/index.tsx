/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import ArrowBackButton from '../../parts/button/ArrowBackButton';
import BarberService from '../../services/barber.service';
import UserService from '../../services/user.service';
import Style from './style';
import BarberDetails from '../../components/barber/BarberDetails';
import BarberModal from '../../components/barber/BarberModal';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const userService = new UserService();
const barberService = new BarberService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  const route: any = useRoute();

  const [loading, setLoading] = useState(true);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    getBarberInfo(userInfo, setUserInfo, setLoading, setFavorited);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <BarberDetails 
        userInfo={userInfo}
        favorited={favorited} 
        handleFavorite={() => handleFavorite(favorited, userInfo, setFavorited)} 
        loading={loading} 
        handleSchedule={(index: number) => handleSchedule(index, setSelectedService, setShowModal)}
      />
      <ArrowBackButton navigation={navigation} />
      <BarberModal
        show={showModal}
        setShow={setShowModal}
        barber={userInfo}
        serviceIndex={selectedService}
      />
    </SafeAreaView>
  );
};

export default BarberScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function getBarberInfo(
  userInfo: any, 
  setUserInfo: any, 
  setLoading: any, 
  setFavorited: any
) {
  setLoading(true);
  const barber = await barberService.getBarber(userInfo.id);

  if (barber) {
    setUserInfo(barber);
    setFavorited(barber.favorited);
  }

  setLoading(false);
};

function handleSchedule(index: number, setSelectedService: any, setShowModal: any) {
  setSelectedService(index);
  setShowModal(true);
};

async function handleFavorite(favorited: boolean, userInfo: any, setFavorited: any) {
  setFavorited(!favorited);
  await userService.favorite(userInfo.id);
};
