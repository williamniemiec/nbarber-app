/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { Alert, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import AppointmentList from '../../components/AppointmentList';
import UserService from '../../services/user.service';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const userService = new UserService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const AppointmentsScreen = () => {

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    getAppointments(setLoading, setList);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView
        style={Style.scroller}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={() => handleRefresh(setRefreshing, setLoading, setList)} 
          />}
      >
        <AppointmentList list={list} loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentsScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
const handleRefresh = (setRefreshing: any, setLoading: any, setList: any) => {
  setRefreshing(false);
  getAppointments(setLoading, setList);
};

async function getAppointments(setLoading: any, setList: any) {
  setLoading(true);

  const appointments = await userService.getAppointments();

  if (appointments && (appointments.length > 0)) {
    setList(appointments);
  }

  setLoading(false);
};