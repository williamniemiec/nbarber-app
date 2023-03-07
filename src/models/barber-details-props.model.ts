/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BarberDto from "../dto/barber.dto";


interface BarberDetailsProps {

  userInfo: BarberDto, 
  favorited: boolean, 
  handleFavorite: () => void, 
  loading: boolean, 
  handleSchedule: (index: number) => void
}

export default BarberDetailsProps;
