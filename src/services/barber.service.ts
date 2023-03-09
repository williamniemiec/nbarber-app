/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BarberSearchResultDto from "../dto/barber-search-result.dto";
import BarberDto from "../dto/barber.dto";
import Service from "./service";


/**
 * Responsible for providing barber serices.
 */
class BarberService extends Service {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super('barber');
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  async getBarbers(lat = null, lng = null, city = null): Promise<BarberDto[]> {
    const response = await this.get(`list?latitude=${lat}&longitude=${lng}&city=${city}`);

    return response.json();
  }

  async getBarber(id: number): Promise<BarberDto> {
    const response = await this.get(`${id}`);

    return response.json();
  }

  async schedule(
    userId: number, 
    service: number, 
    year: number, 
    month: number, 
    day: number, 
    hour: string
  ): Promise<void> {
    const response = await this.post(
      {
        service,
        year,
        month,
        day,
        hour
      }, 
      `${userId}/appointment`
    );

    return response.json();
  }

  async search(barberName: string): Promise<BarberSearchResultDto> {
    const response = await this.get(`search?q=${barberName}`);

    return response.json();
  }
}

export default BarberService;
