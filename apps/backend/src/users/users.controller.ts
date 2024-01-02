import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAllUsers(): Promise<any> {
    return this.usersService.findAllUsers();
  }

  @Get(':username')
  findUserByUsername(@Param('username') username: string): Promise<any> {
    return this.usersService.findUserByUsername(username);
  }

  @Get()
  @Delete(':username')
  removeUserByUsername(@Param('username') username: string): Promise<any> {
    return this.usersService.removeUserByUsername(username);
  }
}
