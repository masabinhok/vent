import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MatchModule } from './match/match.module';
import { SessionModule } from './session/session.module';
import config from './config/config';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MatchModule,
    SessionModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
