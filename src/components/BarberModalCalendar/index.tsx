import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import NavNextIcon from '../../assets/images/svg/nav_next.svg';
import NavPrevIcon from '../../assets/images/svg/nav_prev.svg';
import ModalItem from '../../parts/ModalItem';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const DATE_ITEM_WIDTH = 45;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
];


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalCalendar = ({ 
  listDays, 
  month, 
  year, 
  day, 
  onSelectDay,
  onPreviousMonth,
  onNextMonth
}: any) => {
  if (!listDays) {
    return (<></>);
  }

  return (
    <ModalItem>
      <View style={Style.dateInfo}>
        <TouchableOpacity 
          style={Style.dataPrevArea} 
          onPress={onPreviousMonth}
        >
          <NavPrevIcon width='35' height='35' fill='#000000' />
        </TouchableOpacity>
        <Text style={Style.dateTitleArea}>
          { `${months[month]} ${year}` }
        </Text>
        <TouchableOpacity 
          style={Style.dataNextArea} 
          onPress={onNextMonth}
        >
          <NavNextIcon width='35' height='35' fill='#000000' />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={Style.dateList} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentOffset={{x:DATE_ITEM_WIDTH * day-1, y:0}}
      >
        {listDays.map((item: any, index: number) => (
          <TouchableOpacity 
            key={index} 
            style={Style.dateBtn} 
            onPress={() => onSelectDay(item.day)} 
            disabled={!item.available}
          >
            <View style={[item.available ? Style.dateItem : Style.dateItemDisabled, (item.day == day) ? Style.active : null]}>
              <Text style={[Style.dateItemWeekDay, (item.day == day) ? Style.activeText : null]}>
                {item.weekday}
              </Text>
              <Text style={[Style.dateItemDay, (item.day == day) ? Style.activeText : null]}>
                {item.day}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ModalItem>
  );
}

export default BarberModalCalendar;
