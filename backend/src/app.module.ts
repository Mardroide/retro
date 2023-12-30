import { Module } from '@nestjs/common';
import { SessionsModule } from './sessions/sessions.module';
import { SessionsController } from './sessions/sessions.controller';
import { SessionsService } from './sessions/sessions.service';

@Module({
  imports: [SessionsModule],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class AppModule {}
