import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner';
import FavoriteButton from '../../parts/button/FavoriteButton';
import Stars from '../../parts/Stars';
import BarberAvatar from '../../parts/barber/BarberAvatar';
import BarberServices from '../BarberServices';
import BarberTestimonials from '../BarberTestimonials';
import PhotoSlider from '../PhotoSlider';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberDetails = ({userInfo, favorited, handleFavorite, loading, handleSchedule}: any) => {
  if (loading) {
    return <LoadingSpinner />
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
