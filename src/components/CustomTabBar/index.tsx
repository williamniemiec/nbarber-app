import React, { useContext } from 'react';
import { View } from 'react-native';
import Style from './style';
import { UserContext } from '../../contexts/UserContext';
import HomeIcon from '../../assets/images/svg/home.svg';
import SearchIcon from '../../assets/images/svg/search.svg';
import TodayIcon from '../../assets/images/svg/today.svg';
import FavoriteIcon from '../../assets/images/svg/favorite.svg';
import CenteredTabButton from '../../parts/button/CenteredTabButton';
import TabButton from '../../parts/button/TabButton';
import ProfileTabIcon from '../../parts/ProfileTabIcon';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CustomTabBar = ({ state, navigation }: any) => {

  const user = useContext(UserContext);

  return (
    <View style={Style.tabArea}>
      <TabButton onPress={() => goTo('Home', navigation)}>
        <HomeIcon 
          height='24' 
          fill='#ffffff' 
          style={{opacity: state.index == 0 ? 1 : 0.6}} 
        />
      </TabButton>
      <TabButton onPress={() => goTo('Search', navigation)}>
        <SearchIcon 
          height='24' 
          fill='#ffffff' 
          style={{opacity: state.index == 1 ? 1 : 0.6}} 
        />
      </TabButton>
      <CenteredTabButton onPress={() => goTo('Appointments', navigation)}>
        <TodayIcon height='32' fill='#4EADBE' />
      </CenteredTabButton>
      <TabButton onPress={() => goTo('Favorites', navigation)}>
        <FavoriteIcon 
          height='24' 
          fill='#ffffff' 
          style={{opacity: state.index == 3 ? 1 : 0.6}} 
        />
      </TabButton>
      <TabButton onPress={() => goTo('Profile', navigation)}>
        <ProfileTabIcon avatar={user.avatar} selected={state.index == 4} />
      </TabButton>
    </View>
  );
};

export default CustomTabBar;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function goTo(screenName: string, navigation: any) {
  navigation.navigate(screenName);
};
