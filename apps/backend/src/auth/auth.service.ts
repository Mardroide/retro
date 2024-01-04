import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SingUpDto } from './dto/sign-up.dto';
import { User } from 'src/common/schemas/user.schema';
import { SingInDto } from './dto/sing-in.dto';
import { compareHash } from 'src/common/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(singInDto: SingInDto): Promise<string> {
    const user = await this.usersService.findUserByUsername(singInDto.username);

    if (!user?.password) {
      throw new ForbiddenException('Username or password is incorrect');
    }

    const isValidPassword = compareHash({
      raw: singInDto.password,
      hash: user.password,
    });

    if (!isValidPassword) {
      throw new ForbiddenException('Username or password is incorrect');
    }

    return this.jwtService.sign({ id: user._id });
  }

  async register(singUpDto: SingUpDto): Promise<User> {
    return await this.usersService.create(singUpDto);
  }

  async verify(jwt: string): Promise<any> {
    let payload;

    try {
      payload = this.jwtService.verify(jwt);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    if (!payload) {
      throw new UnauthorizedException('Invalid token');
    }

    console.log(payload.id);

    //const user = await this.usersService.findUserById(payload.id);

    // if (!user) {
    //   throw new UnauthorizedException('User not found');
    // }

    //return user;
  }
}
