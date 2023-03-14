import AsyncStorage from "@react-native-async-storage/async-storage";

/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ApiConfig from '../config/api.config';
import AuthenticationException from "./exceptions/authentication.exception";
import ApiException from "./exceptions/api.exception";


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
  protected async getById(id: number, path?: string): Promise<any> {
    return fetch(`${this.buildUrl(path)}/${id}`, {
      headers: this.buildAuthorizationHeader()
    })
      .then(response => this.parseResponse(response))
      .catch(err => this.parseError(err));
  }

  private async parseResponse(response: Response): Promise<any> {
    const jsonResponse = await response.json();
    
    console.info('Response', jsonResponse);
    
    if (![200, 201, 202, 204].includes(response.status)) {
      throw new ApiException(jsonResponse.error);
    }

    return jsonResponse;
  }

  private parseError(err: any): void {
    console.error(err);

    if (err === 'Unauthenticated') {
      throw new AuthenticationException();
    }
        
    throw new ApiException(err);
  }

  private buildAuthorizationHeader(): HeadersInit_ | undefined {
    if (!this.token) {
      return undefined;
    }

    return {
      'Authorization': `Bearer ${this.token}`
    };
  }

  private buildUrl(path?: string) {
    if (!path) {
      return `${this.api}/${this.uri}`;
    }

    return `${this.api}/${this.uri}/${path}`;
  }

  protected async get(path?: string): Promise<any> {
    console.info(`GET ${this.buildUrl(path)}`);

    return fetch(`${this.buildUrl(path)}`)
      .then(response => this.parseResponse(response))
      .catch(err => this.parseError(err));
  }

  protected async post(data: any, path?: string): Promise<any> {
    console.info(`POST ${this.buildUrl(path)}`, data);

    return fetch(`${this.buildUrl(path)}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this.buildJsonHeader()
    })
      .then(response => this.parseResponse(response))
      .catch(err => this.parseError(err));
  }

  private buildJsonHeader(): HeadersInit_ | undefined {
    if (!this.token) {
      return {
        'Content-type': 'application/json; charset=UTF-8'
      };
    }

    return {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${this.token}`
    };
  }

  protected async put(data: any, id?: number, path?: string): Promise<any> {
    console.info(`PUT ${this.buildUrl(path)}`, id, data);

    let url = `${this.buildUrl(path)}`;

    if (id) {
      url += `/${id}`;
    }

    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: this.buildJsonHeader()
    })
      .then(response => this.parseResponse(response))
      .catch(err => this.parseError(err));
  }

  protected async delete(id: number, path?: string): Promise<any> {
    console.info(`DELETE ${this.buildUrl(path)}`, id);

    return fetch(`${this.buildUrl(path)}/${id}`, {
      method: 'DELETE',
      headers: this.buildAuthorizationHeader()
    })
      .then(response => this.parseResponse(response))
      .catch(err => this.parseError(err));
  }
}

export default Service;

