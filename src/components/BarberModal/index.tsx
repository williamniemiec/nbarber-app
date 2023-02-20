import React, { useState, useEffect } from 'react';
import Style from './style';
import { Modal, TouchableOpacity, View, Image, Text, ScrollView, Alert } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import style from '../../screens/Home/style';
import Api from '../../Api';

const DATE_ITEM_WIDTH = 45;
const HOUR_ITEM_WIDTH = 65;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
];

const daysWeek = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

export default ({show, setShow, user, service}: any) => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);
  const [indexOfSelectedHour, setIndexOfSelectedHour] = useState(0);

  const handleCloseButton = () => {
    setShow(false);
  };

  const CloseButton = () => (
    <TouchableOpacity style={Style.closeButton} onPress={handleCloseButton}>
      <ExpandIcon width='40' height='40' fill='#111111' />
    </TouchableOpacity>
  );

  const ModalItem = ({children}: any) => (
    <View style={Style.modalItem}>
      {children}
    </View>
  );

  const handleFinishButton = async () => {
    if (hasAllRequiredFieldsProvided()) {
      // const req = await Api.schedule(user.id, user.services[service].id, selectedYear, selectedMonth+1, selectedDay, selectedHour);
      // if (req.error === '') {
      setShow(false);
      Alert.alert('Agendamento feito com sucesso!');
      navigation.navigate('Appointments');
      // }
    }
    else {
      Alert.alert('Preencha todos os campos!');
    }
  };

  const hasAllRequiredFieldsProvided = () => {
    return  user.id
            && (service != null)
            && (selectedYear > 0)
            && (selectedMonth > 0)
            && (selectedDay > 0)
            && (selectedHour != null)
  };

  const handlePrevMonth = () => {
    const previousDate = selectedMonth - 1;

    if (previousDate < 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    }
    else {
      setSelectedMonth(previousDate);
    }

    setSelectedDay(0);
    setSelectedHour(null);
    setIndexOfSelectedHour(0);
  };

  const handleNextMonth = () => {
    const nextDate = selectedMonth + 1;

    if (nextDate > 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    }
    else {
      setSelectedMonth(nextDate);
    }

    setSelectedDay(0);
    setSelectedHour(null);
    setIndexOfSelectedHour(0);
  };

  const handleSelectHour = (hour: any, index: number) => {
    setSelectedHour(hour);
    setIndexOfSelectedHour(index);
  };

  useEffect(() => {
    const today = new Date();

    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  useEffect(() => {
    if (user.available == null)
      return;

    const lastDayOfCurrentMonth = new Date(selectedYear, selectedMonth+1, 0).getDate();
    const daysOfCurrentMonth: any = [];
    let firstDayAvailable = 0;

    for (let i = 1; i < lastDayOfCurrentMonth; i++) {
      let currentDay = new Date(selectedYear, selectedMonth, i);

      // Monta date para acessar availability do barber
      let year = currentDay.getFullYear();
      let month: any = currentDay.getMonth() + 1;
      let day: any = currentDay.getDate();
      month = (month < 10) ? '0' + month : month;
      day = (day < 10) ? '0' + day : day;
      let date = `${year}-${month}-${day}`;
      let availability = user.available.filter((item: any) => item.date === date);

      daysOfCurrentMonth.push({
        available: availability.length > 0,
        weekday: daysWeek[currentDay.getDay()],
        day: i
      });

      if ((firstDayAvailable == 0) && (availability.length > 0))
        firstDayAvailable = i;
    }

    setListDays(daysOfCurrentMonth);
    setSelectedDay(firstDayAvailable);
    setListHours([]);
    setSelectedHour(null);
    setIndexOfSelectedHour(0);
  }, [selectedMonth, selectedYear, show]);

  useEffect(() => {
    if (selectedDay == 0)
      return;

    if (user.available == null)
      return;

      let currentDay = new Date(selectedYear, selectedMonth, selectedDay);

      // Monta date para acessar availability do barber
      let year = currentDay.getFullYear();
      let month: any = currentDay.getMonth() + 1;
      let day: any = currentDay.getDate();
      month = (month < 10) ? '0' + month : month;
      day = (day < 10) ? '0' + day : day;
      let date = `${year}-${month}-${day}`;
      let availability = user.available.filter((item: any) => item.date === date);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }

      setSelectedHour(null);
      setIndexOfSelectedHour(0);
  }, [selectedDay, show]);

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType='slide'
    >
      <View style={Style.modalArea}>
        <View style={Style.modalBody}>
          <CloseButton />
          <ModalItem>
            <View style={Style.userInfo}>
              <Image style={Style.userAvatar} source={{uri: user.avatar}} />
              <Text style={Style.userName}>{user.name}</Text>
            </View>
          </ModalItem>

          {service != null &&
            <ModalItem>
              <View style={Style.serviceInfo}>
                <Text style={Style.serviceName}>{user.services[service].name}</Text>
                <Text style={Style.servicePrice}>R$ {user.services[service].price.toFixed(2)}</Text>
              </View>
            </ModalItem>
          }

          <ModalItem>
            <View style={Style.dateInfo}>
              <TouchableOpacity style={Style.dataPrevArea} onPress={handlePrevMonth}>
                <NavPrevIcon width='35' height='35' fill='#000000' />
              </TouchableOpacity>
              <Text style={Style.dateTitleArea}>{`${months[selectedMonth]} ${selectedYear}`}</Text>
              <TouchableOpacity style={Style.dataNextArea} onPress={handleNextMonth}>
                <NavNextIcon width='35' height='35' fill='#000000' />
              </TouchableOpacity>
            </View>

            <ScrollView style={Style.dateList} horizontal={true} showsHorizontalScrollIndicator={false} contentOffset={{x:DATE_ITEM_WIDTH * selectedDay-1, y:0}}>
              {listDays.map((item: any, index: number) => (
                <TouchableOpacity key={index} style={Style.dateBtn} onPress={() => setSelectedDay(item.day)} disabled={!item.available}>
                  <View style={[item.available ? Style.dateItem : Style.dateItemDisabled, (item.day == selectedDay) ? Style.active : null]}>
                    <Text style={[Style.dateItemWeekDay, (item.day == selectedDay) ? Style.activeText : null]}>{item.weekday}</Text>
                    <Text style={[Style.dateItemDay, (item.day == selectedDay) ? Style.activeText : null]}>{item.day}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ModalItem>

          {listHours.length > 0 &&
            <ModalItem>
              <ScrollView 
                style={Style.timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentOffset={{x:HOUR_ITEM_WIDTH * indexOfSelectedHour, y:0}}
              >
                {listHours.map((item, index) => (
                  <TouchableOpacity key={index} style={[Style.timeItem, (item == selectedHour) ? Style.active : null]} onPress={() => handleSelectHour(item, index)}>
                    <Text style={[Style.timeItemText, (item == selectedHour) ? Style.activeText : null]}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ModalItem>
          }
          
          <TouchableOpacity style={Style.finishButton} onPress={handleFinishButton}>
            <Text style={Style.finishButtonText}>Finalizar Agendamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

