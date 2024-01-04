import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SingInDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
