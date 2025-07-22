import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionService } from './session.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'generated/prisma';

@UseGuards(AuthGuard)
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Get('getAllSessions')
  async getAllSessions(){
    return this.sessionService.getAllSessions();
  }
}
