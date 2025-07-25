import { Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
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
  @Get('')
  async getAll(){
    return this.matchService.getAll();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('delete')
  async deleteAll(){
    return this.matchService.deleteAll();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('delete/:id')
  async delete(@Param('id') id: number){
    return this.matchService.delete(id);
  }

  @Post('request')
  async requestForMatch(@GetUser('sub') userId: number ){
    return this.matchService.requestForMatch(userId);
  }
}
