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


  // ------------------------------------------------------------------------
  //         Constructor
  // ------------------------------------------------------------------------
  protected constructor(uri: string) {
    this.api = ApiConfig.BASE_URL;
    this.uri = uri;
  }


  // ------------------------------------------------------------------------
  //         Methods
  // ------------------------------------------------------------------------
  get(id: number, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}/${id}`);
  }

  private buildUrl(path?: string) {
    if (!path) {
      return `${this.api}/${this.uri}`;
    }

    return `${this.api}/${this.uri}/${path}`;
  }

  post(data: any, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

  put(id: number, data: any, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

  delete(id: number, path?: string): Promise<Response> {
    return fetch(`${this.buildUrl(path)}/${id}`, {
      method: 'DELETE',
    });
  }
}

export default Service;
