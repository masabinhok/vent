import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { SessionService } from './session.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'generated/prisma';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@UseGuards(AuthGuard)
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Get('all')
  async getAll(){
    return this.sessionService.getAll();
  }

  @Get('')
  async get(@GetUser('sub') id: number){
    return this.sessionService.get(id);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('delete')
  async deleteAll(){
    return this.sessionService.deleteAll();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('delete/:id')
  async delete(@Param('id') id: number){
    return this.sessionService.delete(id);
  }
}
