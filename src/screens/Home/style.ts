/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63c2d1'
  },
  scroller: {
    flex: 1,
    padding: 20
  },
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
  },
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
  loadingIcon: {
    marginTop: 50
  },
  listArea: {
    marginTop: 30,
    marginBottom: 30
  }
});
