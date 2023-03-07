/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  swiperPpt: {
    height: 240
  },
  testimonialArea: {
    marginTop: 30,
    height: 110,
    marginBottom: 50
  },
  testimonialItem: {
    backgroundColor: '#268596',
    padding: 15,
    borderRadius: 10,
    height: 110,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  testimonialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  testimonialInfoName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  testimonialBody: {
    fontSize: 13,
    color: 'white'
  }
});
