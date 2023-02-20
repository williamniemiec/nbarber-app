import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Style from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Api from '../../Api';
import Swiper from 'react-native-swiper';
import SwipeDot from '../../components/SwipeDot';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BarberModal from '../../components/BarberModal';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  
  const [loading, setLoading] = useState(true);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const handleSchedule = (index) => {
    setSelectedService(index);
    setShowModal(true);
  };

  const handleFavorite = async () => {
    setFavorited(!favorited);

    //await Api.favorite(userInfo.id);
  }

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);

      if (json.error == '') {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);
      } 
      else {
        alert('Error: ' + json.error);
      }

      setLoading(false);
    };

    getBarberInfo();
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView style={Style.scroller}>
        {userInfo.photos && userInfo.photos.length > 0
        ? <Swiper
            style={Style.swiperCarrosel}
            dot={<SwipeDot active={false} />}
            activeDot={<SwipeDot active={true} />}
            paginationStyle={{top:15, right:15, bottom:null, left:null}}
            autoplay={true}
          >
            {userInfo.photos.map((item, index) => (
              <View key={index} style={Style.swipeItem}>
                <Image style={Style.swipeImage} source={{uri:item.url}} resizeMode='cover' />
              </View>
            ))}
          </Swiper>
        : <View style={Style.fakeSwiper}></View>
        }

        <View style={Style.pageBody}>
          <View style={Style.userInfoArea}>
            <Image style={Style.userAvatar} source={{uri:userInfo.avatar}} resizeMode='cover' />
            
            <View style={Style.userInfo}>
              <Text style={Style.userInfoName}>{userInfo.name}</Text>
              <Stars stars={userInfo.stars} showNumber={true} />
            </View>
            
            <TouchableOpacity style={Style.userFavButton} onPress={handleFavorite}>
              {favorited
              ? <FavoriteFullIcon width='24' height='24' fill='#ff0000' />
              : <FavoriteIcon width='24' height='24' fill='#ff0000' />
              }
            </TouchableOpacity>

          </View>
          {loading && <ActivityIndicator style={Style.loading} size='large' color='black' />}
          {userInfo.services && 
            <View style={Style.serviceArea}>
              <Text style={Style.title}>Lista de serviços</Text>
              {userInfo.services.map((item, index) => (
                <View style={Style.serviceItem} key={index}>
                  <View style={Style.serviceInfo}>
                    <Text style={Style.serviceName}>{item.name}</Text>
                    <Text style={Style.servicePrice}>R$ {item.price.toFixed(2)}</Text>
                  </View>

                  <TouchableHighlight underlayColor='#ddd' style={Style.serviceChooseBtn} onPress={() => handleSchedule(index)}>
                    <Text style={Style.serviceChooseBtnText}>Agendar</Text>
                  </TouchableHighlight>
                </View>
              ))}
            </View>
          }
          
          {userInfo.testimonials && userInfo.testimonials.length > 0 &&
            <View style={Style.testimonialArea}>
              <Swiper
                style={Style.swiperPpt}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width='35' height='35' fill='#000000' />}
                nextButton={<NavNextIcon width='35' height='35' fill='#000000' />}
              >
                {userInfo.testimonials.map((item, index) => (
                  <View style={Style.testimonialItem} key={index}>
                    <View style={Style.testimonialInfo}>
                      <Text style={Style.testimonialInfoName}>{item.name}</Text>
                      <Stars stars={item.rate} showNumber={false} />
                    </View>
                    <Text style={Style.testimonialBody}>{item.body}</Text>
                  </View>
                ))}
              </Swiper>
            </View>
          }
        </View>
      </ScrollView>

      <TouchableOpacity style={Style.backBtn} onPress={() => navigation.goBack()}>
        <BackIcon width='44' height='44' fill='#ffffff' />
      </TouchableOpacity>

      <BarberModal 
        show={showModal} 
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </SafeAreaView>
  );
};
