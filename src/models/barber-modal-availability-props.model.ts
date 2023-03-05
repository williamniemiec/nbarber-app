interface BarberModalAvailabilityProps {

  listHours: string[], 
  hour: string | null, 
  hourIndex: number,
  onSelectHour: (hour: string, index: number) => void
}

export default BarberModalAvailabilityProps;
