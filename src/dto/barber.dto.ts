import BarberAvailabilityDto from "./barber-availability.dto";
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
  photos: string[],
  availability: BarberAvailabilityDto[]
}

export default BarberDto;
