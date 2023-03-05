import BarberDto from "../dto/barber.dto";


interface BarberDetailsProps {

  userInfo: BarberDto, 
  favorited: boolean, 
  handleFavorite: () => void, 
  loading: boolean, 
  handleSchedule: (index: number) => void
}

export default BarberDetailsProps;
