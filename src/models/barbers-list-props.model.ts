import BarberDto from "../dto/barber.dto";

interface BarbersListProps {

  list: BarberDto[], 
  loading: boolean, 
  onPress: (value: BarberDto) => void
}

export default BarbersListProps;
