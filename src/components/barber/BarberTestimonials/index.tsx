/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import TestimonialsProps from '../../../models/testimonials-props.model';
import Stars from '../../../parts/Stars';
import NavNextIcon from '../../assets/images/svg/nav_next.svg';
import NavPrevIcon from '../../assets/images/svg/nav_prev.svg';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberTestimonials = ({ testimonials }: TestimonialsProps) => {

  if (!testimonials || testimonials.length === 0) {
    return (<></>);
  }

  return (
    <View style={Style.testimonialArea}>
      <Swiper
        style={Style.swiperPpt}
        showsPagination={false}
        showsButtons={true}
        prevButton={<NavPrevIcon width="35" height="35" fill="#000000" />}
        nextButton={<NavNextIcon width="35" height="35" fill="#000000" />}>
        {testimonials.map((item: any, index: number) => (
          <View style={Style.testimonialItem} key={index}>
            <View style={Style.testimonialInfo}>
              <Text style={Style.testimonialInfoName}>{item.name}</Text>
              <Stars stars={item.rate} showNumber={false} />
            </View>
            <Text style={Style.testimonialBody}>{item.body}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default BarberTestimonials;
