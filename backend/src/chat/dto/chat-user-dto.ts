import { IsString } from 'class-validator';

export class ChatUserDto {
  @IsString()
  roomId: string;

  @IsString()
  userId: string;

  @IsString()
  userColor: string;
}
