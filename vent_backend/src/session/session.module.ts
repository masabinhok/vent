import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { SessionCronService } from './session-cron.service';

@Module({
  controllers: [SessionController],
  providers: [SessionService, SessionCronService],
  exports: [SessionService]
})
export class SessionModule {}
