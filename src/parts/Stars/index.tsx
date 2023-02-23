import React from 'react';
import { View, Text } from 'react-native';
import Style from './style'
import Star from '../../parts/Star';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const Stars = ({ stars, showNumber }: any) => {
  
  const s = [0, 0, 0, 0, 0];
  const floorStar = Math.floor(stars);
  const remainder = stars - floorStar;
  let i;
  
  for (i = 0; i < floorStar; i++) {
    s[i] = 100;
  }

  if (remainder > 0) {
    s[i] = 50;
  }

  for (let j = i+1; j < 5; j++) {
    s[j] = 0;
  }

  return (
    <View style={Style.starArea}>
      {s.map((item, index) => (
        <View style={Style.starView} key={index}>
          <Star percent={item} />
        </View>
      ))}
      <TotalStars display={showNumber} stars={stars} />
    </View>
  );
};

export default Stars;

const TotalStars = ({ display, stars }: any) => {
  if (!display) {
    return (<></>);
  }

  return (
    <Text style={Style.starText}>
      { stars }
    </Text>
  );
}
