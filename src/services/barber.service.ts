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
  async getBarbers(lat = null, lng = null, city = null): Promise<BarberSearchResultDto> {
    const latitudeQuery = lat ? lat : '';
    const longitudeQuery = lng ? lng : '';
    const cityQuery = city ? city : '';
    const response = await this.get(`list?lat=${latitudeQuery}&lgn=${longitudeQuery}&city=${cityQuery}`);

    return response;
  }

  async getBarber(id: number): Promise<BarberDto> {
    const response = await this.get(`${id}`);

    return response;
  }

  async schedule(
    userId: number, 
    service: number, 
    year: number, 
    month: number, 
    day: number, 
    hour: string
  ): Promise<void> {
    await this.post(
      {
        service,
        year,
        month,
        day,
        hour
      }, 
      `${userId}/appointment`
    );
  }

  async search(barberName: string): Promise<BarberSearchResultDto> {
    const response = await this.get(`search?q=${barberName}`);
    
    return response;
  }
}

export default BarberService;
