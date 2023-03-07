/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BarberServiceDto from "../dto/barber-service.dto";


interface BarberServicesProps {

  services: BarberServiceDto[], 
  handleSchedule: (index: number) => void
}

export default BarberServicesProps;
