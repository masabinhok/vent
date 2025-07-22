import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService){}

  async getAllSessions(){
    return this.prisma.session.findMany({});
  }

  async createSession(user1Id: number, user2Id: number){
    //set 24 hours expiry
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    //create a new session
    await this.prisma.session.create({
      data: {
        user1Id, 
        user2Id, 
        expiresAt
      }
    });
    
    return {
      message: 'Session created successfully.'
    }
  }

  async checkSession(userId: number){
    const existingSession = await this.prisma.session.findFirst({
      where: {
        OR: [
          {user1Id: userId},
          {user2Id: userId}
        ]
      }
    });
    return existingSession ? true : false;
  }
}
