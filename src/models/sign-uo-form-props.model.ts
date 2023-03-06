interface SignUpFormProps {
  
  name: string,
  setName: (value: string) => void,
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
  onSignUp: () => void
}

export default SignUpFormProps;
