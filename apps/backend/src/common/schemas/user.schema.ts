import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @IsString()
  @Prop({ unique: true, required: true })
  username: string;

  @IsString()
  @Prop({ required: true })
  password: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
