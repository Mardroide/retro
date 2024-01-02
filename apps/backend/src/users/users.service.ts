import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/common/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findUserByUsername(username: string): Promise<User[]> {
    return this.userModel.find({ username }).exec();
  }

  removeUserByUsername(username: string): Promise<any> {
    return this.userModel.deleteOne({ username }).exec();
  }
}
