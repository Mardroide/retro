import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingUpDto } from './dto/sign-up.dto';
import { SingInDto } from './dto/sing-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() singUpDto: SingUpDto) {
    return await this.authService.register(singUpDto);
  }

  @Post('login')
  async login(@Body() singInDto: SingInDto) {
    return await this.authService.login(singInDto);
  }

  @Get('logout')
  async logOut(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: 'Sing out successfully',
    });
  }
}
