import UserDto from "./user.dto";

interface BarberTestimonialDto {

  id: number,
  title: string,
  rate: number,
  body: string,
  user: UserDto
}

export default BarberTestimonialDto;
