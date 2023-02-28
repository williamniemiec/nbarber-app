import React, { useEffect, useState } from 'react';
import { Alert, Modal, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CloseButton from '../../parts/button/CloseButton';
import FormButton from '../../parts/button/FormButton';
import BarberModalAvailability from '../BarberModalAvailability';
import BarberModalCalendar from '../BarberModalCalendar';
import BarberModalHeader from '../BarberModalHeader';
import BarberModalService from '../BarberModalService';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const daysWeek = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModal = ({ show, setShow, user, service }: any) => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);
  const [indexOfSelectedHour, setIndexOfSelectedHour] = useState(0);

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
    <Modal transparent={true} visible={show} animationType='slide'>
      <View style={Style.modalArea}>
        <View style={Style.modalBody}>
          <CloseButton onPress={() => setShow(false)} />
          <BarberModalHeader user={user} />
          <BarberModalService user={user} service={service} />
          <BarberModalCalendar 
            listDays={listDays}
            month={selectedMonth} 
            year={selectedYear}
            day={selectedDay}
            onSelectDay={setSelectedDay}
            onPreviousMonth={() => handlePrevMonth(
              selectedMonth,
              selectedYear, 
              setSelectedMonth,
              setSelectedYear,
              setSelectedDay,
              setSelectedHour,
              setIndexOfSelectedHour
              )}
              onNextMonth={() => handleNextMonth(
                selectedMonth,
                selectedYear, 
                setSelectedMonth,
                setSelectedYear,
                setSelectedDay,
                setSelectedHour,
                setIndexOfSelectedHour
              )}
          />
          <BarberModalAvailability 
            listHours={listHours} 
            hour={selectedHour} 
            hourIndex={indexOfSelectedHour}
            onSelectHour={(item: any, index: number) => handleSelectHour(
              item, 
              index, 
              setSelectedHour, 
              setIndexOfSelectedHour
            )}
          />
          <FormButton 
            title="Finalizar Agendamento" 
            onPress={() => handleFinishButton(
              user, 
              service, 
              selectedYear, 
              selectedMonth, 
              selectedDay, 
              selectedHour, 
              setShow, 
              navigation
            )} 
          />
        </View>
      </View>
    </Modal>
  );
}

export default BarberModal;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleFinishButton(
  user: any, 
  service: any, 
  year: any, 
  month: any, 
  day: any, 
  hour: any,
  setShow: any,
  navigation: any
) {
  if (hasAllRequiredFieldsProvided(user, service, year, month, day, hour)) {
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

function hasAllRequiredFieldsProvided(
  user: any, 
  service: any, 
  year: any, 
  month: any, 
  day: any, 
  hour: any
) {
  return  user.id
          && (service != null)
          && (year > 0)
          && (month > 0)
          && (day > 0)
          && (hour != null)
};

function handlePrevMonth(
  selectedMonth: any, 
  selectedYear: any, 
  setSelectedMonth: any,
  setSelectedYear: any,
  setSelectedDay: any,
  setSelectedHour: any,
  setIndexOfSelectedHour: any,
) {
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

function handleNextMonth(
  selectedMonth: any, 
  selectedYear: any, 
  setSelectedMonth: any,
  setSelectedYear: any,
  setSelectedDay: any,
  setSelectedHour: any,
  setIndexOfSelectedHour: any,
) {
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

function handleSelectHour(
  hour: any, 
  index: number, 
  setHour: any, 
  setIndex: any
) {
  setHour(hour);
  setIndex(index);
};
