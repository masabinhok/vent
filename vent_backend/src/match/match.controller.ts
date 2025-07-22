import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MatchService } from './match.service';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'generated/prisma';
import { RolesGuard } from 'src/roles/roles.guard';

@UseGuards(AuthGuard)
@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Get('getAllRequests')
  async getAllRequests(){
    return this.matchService.getAllRequests();
  }

  @Post('request')
  async requestForMatch(@GetUser('sub') userId: number ){
    return this.matchService.requestForMatch(userId);
  }
}
