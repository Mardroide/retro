import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SingUpDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
