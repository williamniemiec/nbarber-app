/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "./service";
import UpdateUserDto from "../dto/update-user.dto";
import BarberDto from "../dto/barber.dto";
import UserAppointmentDto from "../dto/user-appointment.dto";


/**
 * Responsible for providing user services.
 */
class UserService extends Service {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super('user');
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  async favorite(id: number): Promise<void> {
    const response = await this.post({ barber: id }, 'favorite');

    return response.json();
  }

  async getFavorites(): Promise<BarberDto[]> {
    const response = await this.get('favorites');

    return response.json();
  }

  async getAppointments(): Promise<UserAppointmentDto[]> {
    const response = await this.get('appointments');

    return response.json();
  }

  async updateUser(body: UpdateUserDto): Promise<void> {
    const response = await this.put(body);

    return response.json();
  }
}

export default UserService;
