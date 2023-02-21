import React from 'react';
import { View, Text } from 'react-native';
import Style from './style'
import StarFull from '../../assets/images/svg/star.svg';
import StarHalf from '../../assets/images/svg/star_half.svg';
import StarEmpty from '../../assets/images/svg/star_empty.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default ({stars, showNumber}: any) => {
  let s = [0, 0, 0, 0, 0]; // 0: empty; 1: half; 2: full
  let floorStar = Math.floor(stars);
  let remainder = stars - floorStar;
  let i;
  
  for (i = 0; i < floorStar; i++) {
    s[i] = 2;
  }

  if (remainder > 0)
    s[i] = 1;

  for (let j = i+1; j < 5; j++) {
    s[j] = 0;
  }

  return (
    <View style={Style.starArea}>
      {s.map((item, index) => (
        <View style={Style.starView} key={index}>
          {item === 0 && <StarEmpty width='18' height='18' fill='#ff9200' />}
          {item === 1 && <StarHalf width='18' height='18' fill='#ff9200' />}
          {item === 2 && <StarFull width='18' height='18' fill='#ff9200' />}
        </View>
      ))}
      {showNumber && <Text style={Style.starText}>{stars}</Text>}
    </View>
  );
};
