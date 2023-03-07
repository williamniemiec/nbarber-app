/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  locationArea: {
    backgroundColor: '#4eadbe',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: 'white'
  },
  locationFinderBtn: {
    width: 24,
    height: 24
  },
});
