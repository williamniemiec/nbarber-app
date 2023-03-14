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

    AsyncStorage.setItem('token', response.access_token);
    
    return response?.user;
  }

  async signUp(name: string, email: string, password: string): Promise<UserDto> {
    const response = await this.post({name, email, password}, 'signup');

    AsyncStorage.setItem('token', response.access_token);

    return response?.user;
  }

  async signOut(): Promise<void> {
    await this.post({}, 'signout');
    
    AsyncStorage.removeItem('token');
  }

  async refreshToken(): Promise<void> {
    const newToken = await this.get('refresh');
    
    AsyncStorage.setItem('token', newToken.access_token);  
  }
}

export default AuthService;
