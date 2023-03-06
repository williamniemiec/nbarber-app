import React from 'react';
import StarFull from '../../assets/images/svg/star.svg';
import StarHalf from '../../assets/images/svg/star_half.svg';
import StarEmpty from '../../assets/images/svg/star_empty.svg';
import StarProps from '../../models/star-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const Star = ({ percent }: StarProps) => {
  if (percent < 50) {
    return (<StarEmpty width='18' height='18' fill='#ff9200' />);
  }

  if (percent === 50) {
    return (<StarHalf width='18' height='18' fill='#ff9200' />);
  }

  return (<StarFull width='18' height='18' fill='#ff9200' />);
}

export default Star;
