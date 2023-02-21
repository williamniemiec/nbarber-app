import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import NavNextIcon from '../../assets/images/svg/nav_next.svg';
import NavPrevIcon from '../../assets/images/svg/nav_prev.svg';
import Stars from '../../components/Stars';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberTestimonials = ({ testimonials }: any) => {
  if (!testimonials && testimonials.length === 0) {
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
