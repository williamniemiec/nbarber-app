interface SignInFormProps {
  
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
  onSignIn: () => void
}

export default SignInFormProps;
