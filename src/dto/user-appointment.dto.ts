import BarberServiceDto from "./barber-service.dto";
import BarberDto from "./barber.dto";

interface UserAppointmentDto {

  id: number,
  date: string,
  barber: BarberDto,
  service: BarberServiceDto
}

export default UserAppointmentDto;
