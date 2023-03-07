/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import UserDto from "./user.dto";


interface BarberTestimonialDto {

  id: number,
  title: string,
  rate: number,
  body: string,
  user: UserDto
}

export default BarberTestimonialDto;
