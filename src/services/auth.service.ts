/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "./service";
import UserDto from "../dto/user.dto";


/**
 * Responsible for managing authentication.
 */
class AuthService extends Service {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super('auth');
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  async signIn(email: string, password: string): Promise<UserDto> {
    const response = await this.post({email, password}, 'signin');
    const loggedUser = await response.json();

    AsyncStorage.setItem('token', loggedUser.access_token);

    return loggedUser.user;
  }

  async signUp(name: string, email: string, password: string): Promise<void> {
    const response = await this.post({name, email, password}, 'signup');

    const createdUser = await response.json();

    AsyncStorage.setItem('token', createdUser.access_token);

    return createdUser.json();
  }

  async signOut(): Promise<void> {
    const response = await this.post({}, 'signout');
    
    AsyncStorage.removeItem('token');

    return response.json();
  }

  async refreshToken(): Promise<void> {
    const response = await this.get('refresh');
    const newToken = await response.json();

    AsyncStorage.setItem('token', newToken.access_token);  }
}

export default AuthService;
