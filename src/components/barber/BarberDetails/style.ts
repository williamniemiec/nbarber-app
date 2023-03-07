/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  scroller: {
    flex: 1
  },
  pageBody: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    minHeight: 400,
    marginTop: -50
  },
  userInfoArea: {
    flexDirection: 'row',
    marginTop: -30
  },
  userInfo: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  userInfoName: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
