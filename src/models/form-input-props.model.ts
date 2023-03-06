import { SvgProps } from "react-native-svg";

interface FormInputProps {

  placeholder: string, 
  onChangeText: (value: string) => void, 
  Icon: React.FC<SvgProps>, 
  secure?: boolean, 
  value: string 
}

export default FormInputProps;
