/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  headerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    width: 300,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  searchButton: {
    width: 26,
    height: 26
  }
});
