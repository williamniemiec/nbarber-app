/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userAvatar: {
    width: 56,
    height: 56,
    borderRadius: 20,
    marginRight: 15
  },
  userName: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 18
  }
});
