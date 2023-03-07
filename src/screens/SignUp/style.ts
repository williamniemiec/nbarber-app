/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';
import Theme from '../../assets/themes';


export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colorAccent
  },
  inputArea: {
    width: '100%',
    padding: 40
  },
  customButton: {
    height: 60,
    backgroundColor: '#268596',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonText: {
    fontSize: 18,
    color: 'white'
  }
});
