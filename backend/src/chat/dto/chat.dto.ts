import { IsNumber, IsString } from 'class-validator';

export class ChatDataDto {
  @IsString()
  roomId: string;

  @IsNumber()
  onlineUsers: number;
}
