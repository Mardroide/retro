import { Module } from '@nestjs/common';
import {
  CacheModule,
  CacheModuleAsyncOptions,
  CacheStore,
} from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<CacheModuleAsyncOptions>({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
          username: configService.get<string>('REDIS_USERNAME'),
          password: configService.get<string>('REDIS_PASSWORD'),
          socket: {
            host: configService.get<string>('REDIS_HOST'),
            port: +configService.get<number>('REDIS_PORT'),
          },
        });
        return { store: store as unknown as CacheStore };
      },
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
