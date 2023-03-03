import BarberDto from "./barber.dto";

interface BarberSearchResultDto {

  barbers: BarberDto[],
  location: string
}

export default BarberSearchResultDto;

