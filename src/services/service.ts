import AsyncStorage from "@react-native-async-storage/async-storage";

/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ApiConfig from '../config/api.config';


/**
 * Responsible for providing services for some resource.
 */
abstract class Service {

  // ------------------------------------------------------------------------
  //         Attributes
  // ------------------------------------------------------------------------
  protected readonly api: string;
  private readonly uri: string;
  private token?: string | null;


  // ------------------------------------------------------------------------
  //         Constructor
  // ------------------------------------------------------------------------
  protected constructor(uri: string) {
    this.api = ApiConfig.BASE_URL;
    this.uri = uri;
    AsyncStorage.getItem('token').then(token => this.token = token);
  }


  // ------------------------------------------------------------------------
  //         Methods
  // ------------------------------------------------------------------------
  protected getById(id: number, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }

  private buildUrl(path?: string) {
    if (!path) {
      return `${this.api}/${this.uri}`;
    }

    return `${this.api}/${this.uri}/${path}`;
  }

  protected get(path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}`);
  }

  protected post(data: any, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${this.token}`
      }
    });
  }

  protected put(data: any, id?: number, path?: string): Promise<Response> {
    let url = `${this.buildUrl(path)}`;

    if (id) {
      url += `/${id}`;
    }

    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${this.token}`
      }
    });
  }

  protected delete(id: number, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }
}

export default Service;
