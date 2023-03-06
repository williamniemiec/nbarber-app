import BarberDto from "../dto/barber.dto";

interface FavoritesListProps {

  list: BarberDto[], 
  loading: boolean, 
  onPress: (value: BarberDto) => void  
}

export default FavoritesListProps;
