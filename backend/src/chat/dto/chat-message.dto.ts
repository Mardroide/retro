import { IsString } from 'class-validator';

export class ChatMessageDto {
  @IsString()
  roomId: string;

  @IsString()
  message: string;

  @IsString()
  userId: string;

  @IsString()
  userColor: string;
}
