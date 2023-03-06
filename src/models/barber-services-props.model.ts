import BarberServiceDto from "../dto/barber-service.dto";

interface BarberServicesProps {

  services: BarberServiceDto[], 
  handleSchedule: (index: number) => void
}

export default BarberServicesProps;
