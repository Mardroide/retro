import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/common/schemas/user.schema';
import { Model } from 'mongoose';
import { generateHash } from 'src/common/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, username, password } = createUserDto;
    const takenUsername = await this.findUserByUsername(username);
    const takenEmail = await this.findUserByEmail(email);

    if (takenUsername) {
      throw new BadRequestException('User already exists');
    }

    if (takenEmail) {
      throw new BadRequestException('Email already used');
    }

    if (password) {
      createUserDto.password = generateHash({
        raw: password,
      });
    }

    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findUserByUsername(username: string): Promise<any> {
    return await this.userModel.findOne({ username });
  }

  async findUserByEmail(email: string): Promise<any> {
    return await this.userModel.findOne({ email });
  }

  async removeUserByUsername(username: string): Promise<any> {
    return await this.userModel.deleteOne({ username });
  }
}
