/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BarberAvailabilityDto from "./barber-availability.dto";
import BarberPhotoDto from "./barber-photos.dto";
import BarberServiceDto from "./barber-service.dto";
import BarberTestimonialDto from "./barber-testimonial.dto";


interface BarberDto {

  id: number,
  name: string,
  avatar: string,
  stars: number,
  latitude: number,
  longitude: number,
  services: BarberServiceDto[],
  testimonials: BarberTestimonialDto[],
  favorited: boolean,
  photos: BarberPhotoDto[],
  availability: BarberAvailabilityDto[]
}

export default BarberDto;
