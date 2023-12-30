import { Controller, Get, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create() {
    return this.sessionsService.create();
  }

  @Get(':id')
  findSession() {
    return this.sessionsService.findSession();
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Post(':id')
  update(id: string) {
    return this.sessionsService.update(id);
  }

  @Post(':id')
  remove(id: string) {
    return this.sessionsService.remove(id);
  }
}
