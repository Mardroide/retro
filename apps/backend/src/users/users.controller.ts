import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/common/schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':username')
  async findUserByUsername(@Param('username') username: string): Promise<User> {
    return await this.usersService.findUserByUsername(username);
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string): Promise<User> {
    return await this.usersService.findUserByEmail(email);
  }

  @Get()
  @Delete(':username')
  async removeUserByUsername(
    @Param('username') username: string,
  ): Promise<any> {
    return await this.usersService.removeUserByUsername(username);
  }
}
