import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BarberLogo from '../../assets/images/svg/barber.svg';
import LoadingSpinner from '../../components/LoadingSpinner';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const authService = new AuthService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PreloadScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();

  const { dispatch: userDispatch } = useContext(UserContext);
  
  useEffect(() => {
    checkToken(userDispatch, navigation);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      <LoadingSpinner />
    </SafeAreaView>
  );
};

export default PreloadScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function checkToken(userDispatch: any, navigation: any) {
  const token = await AsyncStorage.getItem('token');

  if (token !== null) {
    let json = await authService.refreshToken(token);

    if (json.token) {
      await AsyncStorage.setItem('token', json.token);

      userDispatch({
        type:'SET_AVATAR',
        payload:{
          avatar: json.data.avatar
        }
      });

      navigation.reset({
        routes: [{name:'MainTab'}]
      });
    }
    else {
      navigation.navigate('SignIn');
    }
  }
  else {
    navigation.navigate('SignIn');
  }
};
