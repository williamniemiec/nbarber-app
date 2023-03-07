/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import BarberServices from '../BarberServices';
import BarberTestimonials from '../BarberTestimonials';
import Style from './style';
import Stars from '../../../parts/Stars';
import BarberAvatar from '../../../parts/barber/BarberAvatar';
import FavoriteButton from '../../../parts/button/FavoriteButton';
import LoadingSpinner from '../../LoadingSpinner';
import PhotoSlider from '../../PhotoSlider';
import BarberDetailsProps from '../../../models/barber-details-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberDetails = ({
  userInfo, 
  favorited, 
  handleFavorite, 
  loading, 
  handleSchedule
}: BarberDetailsProps) => {
  if (loading) {
    return (<LoadingSpinner />);
  }

  return (
    <ScrollView style={Style.scroller}>
      <PhotoSlider photos={userInfo.photos} />
      <View style={Style.pageBody}>
        <View style={Style.userInfoArea}>
          <BarberAvatar avatar={userInfo.avatar} />
          <View style={Style.userInfo}>
            <BarberName name={userInfo.name} />
            <Stars stars={userInfo.stars} showNumber={true} />
          </View>
          <FavoriteButton handleFavorite={handleFavorite} favorited={favorited} />
        </View>
        <BarberServices services={userInfo.services} handleSchedule={handleSchedule} />
        <BarberTestimonials testimonials={userInfo.testimonials} />
      </View>
    </ScrollView>
  );
}

export default BarberDetails;

const BarberName = ({ name }: any) => (
  <Text style={Style.userInfoName}>
    {name}
  </Text>
);
