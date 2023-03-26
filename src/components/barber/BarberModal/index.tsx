/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { Alert, Modal, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import BarberModalAvailability from '../BarberModalAvailability';
import BarberModalCalendar from '../BarberModalCalendar';
import BarberModalHeader from '../BarberModalHeader';
import BarberModalService from '../BarberModalService';
import Style from './style';
import BarberService from '../../../services/barber.service';
import CloseButton from '../../../parts/button/CloseButton';
import FormButton from '../../../parts/button/FormButton';
import BarberModalProps from '../../../models/barber-modal-props.model';
import ScheduleDay from '../../../models/schedule-day.model';
import BarberDto from '../../../dto/barber.dto';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const daysWeek = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];
const barberService = new BarberService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModal = ({ show, setShow, barber, serviceIndex }: BarberModalProps) => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [listDays, setListDays] = useState<ScheduleDay[]>([]);
  const [listHours, setListHours] = useState([]);
  const [indexOfSelectedHour, setIndexOfSelectedHour] = useState(0);

  useEffect(() => {
    const today = new Date();

    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  useEffect(() => {
    if (barber.availability == null) {
      return;
    }

    const availability = buildMonthlyAvailabilityList(barber, selectedYear, selectedMonth);

    setListDays(availability.daysOfCurrentMonth);
    setSelectedDay(availability.firstDayAvailable);
    setListHours([]);
    setSelectedHour(null);
    setIndexOfSelectedHour(0);
  }, [selectedMonth, selectedYear, show]);

  useEffect(() => {
    if ((selectedDay == 0) || (barber.availability == null)) {
      return;
    }

    const availability = buildDayAvailability(
      barber, 
      selectedYear, 
      selectedMonth, 
      selectedDay
    );

    if (availability.length > 0) {
      setListHours(availability[0].hours);
    }

    setSelectedHour(null);
    setIndexOfSelectedHour(0);
  }, [selectedDay]);

  return (
    <Modal transparent={true} visible={show} animationType='slide'>
      <View style={Style.modalArea}>
        <View style={Style.modalBody}>
          <CloseButton onPress={() => setShow(false)} />
          <BarberModalHeader barber={barber} />
          <BarberModalService barber={barber} serviceIndex={serviceIndex} />
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
              barber, 
              serviceIndex, 
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
function buildMonthlyAvailabilityList(barber: BarberDto, year: number, month: number) {
  const lastDayOfCurrentMonth = new Date(year, month+1, 0).getDate();
  const daysOfCurrentMonth: ScheduleDay[] = [];
  let firstDayAvailable: number = 0;

  for (let i = 1; i < lastDayOfCurrentMonth; i++) {
    const currentDay = new Date(year, month, i);
    const date = formatDateToIsoFormat(currentDay);
    const availability = barber.availability.filter((item: any) => item.date === date);

    daysOfCurrentMonth.push({
      available: availability.length > 0,
      weekday: daysWeek[currentDay.getDay()],
      day: i
    });

    if ((firstDayAvailable == 0) && (availability.length > 0))
      firstDayAvailable = i;
  }

  return { daysOfCurrentMonth, firstDayAvailable };
}

function formatDateToIsoFormat(date: Date) {
  let year = date.getFullYear();
  let month: any = date.getMonth() + 1;
  let day: any = date.getDate();

  month = (month < 10) ? '0' + month : month;
  day = (day < 10) ? '0' + day : day;
  
  return `${year}-${month}-${day}`;
}

function buildDayAvailability(user: any, year: number, month: number, day: number) {
  const date = formatDateToIsoFormat(new Date(year, month, day));
  
  return user.available.filter((item: any) => item.date === date);
}

async function handleFinishButton(
  barber: BarberDto, 
  serviceIndex: number, 
  year: number, 
  month: number, 
  day: number, 
  hour: string | null,
  setShow: (value: boolean) => void,
  navigation: NavigationProp<any, any>
) {
  if (hasAllRequiredFieldsProvided(barber, serviceIndex, year, month, day, hour)) {
    const req: any = await barberService.schedule(
      barber.id, 
      barber.services[serviceIndex].id, 
      year, 
      month+1, 
      day, 
      hour
    );
    
    if (req && req.error === '') {
      setShow(false);
      Alert.alert('Agendamento feito com sucesso!');
      navigation.navigate('Appointments');
    }
  }
  else {
    Alert.alert('Preencha todos os campos!');
  }
};

function hasAllRequiredFieldsProvided(
  barber: BarberDto, 
  serviceIndex: number, 
  year: number, 
  month: number, 
  day: number, 
  hour: string | null
) {
  return  barber.id
          && (serviceIndex != null)
          && (year > 0)
          && (month > 0)
          && (day > 0)
          && (hour != null)
};

function handlePrevMonth(
  selectedMonth: number, 
  selectedYear: number, 
  setSelectedMonth: (value: number) => void,
  setSelectedYear: (value: number) => void,
  setSelectedDay: (value: number) => void,
  setSelectedHour: (value: string | null) => void,
  setIndexOfSelectedHour: (value: number) => void,
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
  selectedMonth: number, 
  selectedYear: number, 
  setSelectedMonth: (value: number) => void,
  setSelectedYear: (value: number) => void,
  setSelectedDay: (value: number) => void,
  setSelectedHour: (value: string | null) => void,
  setIndexOfSelectedHour: (value: number) => void,
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
  hour: string | null, 
  index: number, 
  setHour: (value: string | null) => void,
  setIndex: (value: number) => void,
) {
  setHour(hour);
  setIndex(index);
};
