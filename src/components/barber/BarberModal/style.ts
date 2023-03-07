/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  modalArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },
  modalBody: {
    backgroundColor: '#83d6e3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 400,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40
  },
  closeButton: {
    width: 40,
    height: 40
  },
  modalItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
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
  },

  serviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  finishButton: {
    backgroundColor: '#268596',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  finishButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },

  dateInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataPrevArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  dataNextArea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  dateTitleArea: {
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111111',
    textAlign: 'center'
  },

  dateList: {

  },
  dateBtn: {
    width: 45,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  dateItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateItemDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  },
  dateItemWeekDay: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateItemDay: {
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
  }
});
