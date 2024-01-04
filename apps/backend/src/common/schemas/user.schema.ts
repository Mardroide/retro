import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @IsEmail()
  @Prop({ required: true })
  email: string;

  @IsString()
  @Prop({ unique: true, required: true })
  username: string;

  @IsString()
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
