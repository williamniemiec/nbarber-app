import BarberDto from "../dto/barber.dto";

interface BarberModalProps {
  
  show: boolean, 
  setShow: (value: boolean) => void, 
  barber: BarberDto, 
  serviceIndex: number 
}

export default BarberModalProps;
