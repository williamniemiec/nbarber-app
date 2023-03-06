interface SearchBarProps {
  
  onTextChange: (value: string) => void, 
  onEndEditing: () => void, 
  value: string, 
  placeholder: string
}

export default SearchBarProps;
