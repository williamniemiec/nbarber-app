/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  timeList: {

  },
  timeItem: {
    width: 65,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  timeItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#4eadbe',
    borderRadius: 10,
    paddingVertical: 5
  },
  activeText: {
    color: 'white'
  },
});
