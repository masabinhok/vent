import { Injectable } from '@nestjs/common';
import { MessageType, RequestStatus } from '@shared/types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService){}

  async getAll(){
    return this.prisma.session.findMany({});
  }

  async get(id: number){
    return this.prisma.session.findFirst({
      where: {
        OR: [
          {user1Id: id},
          {user2Id: id}
        ],
        status: 'ACTIVE'
      },
      include: {
        user1: true, 
        user2: true
      }
      
    })
  }

  async create(user1Id: number, user2Id: number): Promise<{
    message: string, 
    type: MessageType, 
    status: RequestStatus
  }>{
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
      message: 'Session created successfully.',
      type: 'success',
      status: 'active'
    }
  }

  async check(userId: number){
    const existingSession = await this.prisma.session.findFirst({
      where: {
        OR: [
          {user1Id: userId},
          {user2Id: userId}
        ],
        status: 'ACTIVE'
      }
    });
    return existingSession ? true : false;
  }

  async deleteAll() {
    return this.prisma.session.deleteMany();
  }

  async delete(id: number){
    return this.prisma.session.delete({where: {
      id
    }})
  };
}
