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
