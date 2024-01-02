import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { CachingModule } from 'src/caching/caching.module';

@Module({
  providers: [ChatGateway, ChatService],
  imports: [CachingModule],
})
export class ChatModule {}
