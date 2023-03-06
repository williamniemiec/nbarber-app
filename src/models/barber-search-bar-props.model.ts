interface BarberSearchBarProps {

  value: string,
  placeholder: string,
  onChangeText: (value: string) => void, 
  onEndEditing: () => void, 
  onPressSearchButton: () => void
}

export default BarberSearchBarProps;
