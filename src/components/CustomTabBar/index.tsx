import React, { useContext } from 'react';
import { Image, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Style from './style';
import { UserContext } from '../../contexts/UserContext';
import HomeIcon from '../../assets/images/svg/home.svg';
import SearchIcon from '../../assets/images/svg/search.svg';
import TodayIcon from '../../assets/images/svg/today.svg';
import FavoriteIcon from '../../assets/images/svg/favorite.svg';
import AccountIcon from '../../assets/images/svg/account.svg';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default ({state, navigation}: any) => {

  const user = useContext(UserContext);

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={Style.tabArea}>
      <TouchableOpacity style={Style.tabItem} onPress={() => goTo('Home')}>
        <HomeIcon height='24' fill='#ffffff' style={{opacity: state.index == 0 ? 1 : 0.6}} />
      </TouchableOpacity>
      <TouchableOpacity style={Style.tabItem} onPress={() => goTo('Search')}>
        <SearchIcon height='24' fill='#ffffff' style={{opacity: state.index == 1 ? 1 : 0.6}} />
      </TouchableOpacity>
      <TouchableHighlight style={Style.tabItemCenter} onPress={() => goTo('Appointments')} underlayColor='#ddd'>
        <TodayIcon height='32' fill='#4EADBE' />
      </TouchableHighlight>
      <TouchableOpacity style={Style.tabItem} onPress={() => goTo('Favorites')}>
        <FavoriteIcon height='24' fill='#ffffff' style={{opacity: state.index == 3 ? 1 : 0.6}} />
      </TouchableOpacity>
      <TouchableOpacity style={Style.tabItem} onPress={() => goTo('Profile')}>
        {user.avatar != '' 
          ?
            <Image style={[Style.avatar, {opacity: state.index == 4 ? 1 : 0.6}]} source={{uri: user.avatar}} />
          :
            <AccountIcon height='24' fill='#ffffff' style={{opacity: state.index == 4 ? 1 : 0.6}} />
        }
        
      </TouchableOpacity>
    </View>
  );
};
