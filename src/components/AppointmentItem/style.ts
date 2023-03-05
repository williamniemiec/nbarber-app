import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  body: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 20
  },
  barberInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  barberInfoAvatar: {
    width: 56,
    height: 56,
    borderRadius: 20,
    marginRight: 20
  },
  barberInfoUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000'
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#4eadbe',
    borderRadius: 20
  },
});
