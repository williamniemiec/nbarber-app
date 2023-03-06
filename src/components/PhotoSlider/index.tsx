import React from 'react';
import { Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import PhotoSliderProps from '../../models/photo-slider-props.model';
import SwipeDot from '../../parts/SwipeDot';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PhotoSlider = ({ photos }: PhotoSliderProps) => {
  if (!photos || photos.length === 0) {
    return (
      <View style={Style.fakeSwiper}></View>
    );
  }

  return (
    <Swiper
      style={Style.swiperCarrosel}
      dot={<SwipeDot active={false} />}
      activeDot={<SwipeDot active={true} />}
      paginationStyle={{top: 15, right: 15, bottom: undefined, left: undefined}}
      autoplay={true}
    >
      {photos.map((item, index) => (
        <View key={index} style={Style.swipeItem}>
          <Image
            style={Style.swipeImage}
            source={{uri: item.url}}
            resizeMode="cover"
          />
        </View>
      ))}
    </Swiper>
  );
}

export default PhotoSlider;
