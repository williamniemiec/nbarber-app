import BarberServiceDto from "../dto/barber-service.dto";
import BarberDto from "../dto/barber.dto";

interface AppointmentItemProps {
  
  barber: BarberDto,
  dateTime: string,
  service: BarberServiceDto
}

export default AppointmentItemProps;
