import { Injectable } from '@nestjs/common';
import { MatchmakingQueue } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionService } from 'src/session/session.service';
import { MessageType, RequestStatus } from '../common/types/types';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService,
    private sessionService: SessionService
  ) {}

  async getAll(): Promise<MatchmakingQueue[]>{
    return this.prisma.matchmakingQueue.findMany({});
  }

  async deleteAll() {
    return this.prisma.matchmakingQueue.deleteMany();
  }

  async delete(id: number){
    return this.prisma.matchmakingQueue.delete({where: {
      id
    }})
  }

  async requestForMatch(userId: number): Promise<{
    message: string,
    type: MessageType
    status: RequestStatus
  }>{
    // a user can't request if has a active session..
    const existingSession = await this.sessionService.check(userId);
    if(existingSession){
      return {
        message: 'You have an active session. Failed to create a request.',
        type: 'error',
        status: 'active'
      }
    }

    // a user can only request once !
    const existingUserRequest = await this.prisma.matchmakingQueue.findFirst({
      where: {
        userId
      }
    });

    //if the user has a pending request.
    if(existingUserRequest){
      return {
        message: 'You have a pending request!',
        type: 'warn',
        status: 'pending'
      }
    }
    
    // look for a potential match, who is not the user itself.
    const potentialMatch = await this.prisma.matchmakingQueue.findFirst({
      where: {
        userId: {
          not: userId
        }
      }
    });

    // if found, create a session immediately.
    if(potentialMatch){
      //remove the request from the requestQueue
      await this.prisma.matchmakingQueue.delete({where: {
        id: potentialMatch.id
      }});
      //create a session..
      return this.sessionService.create(userId, potentialMatch.userId);
    }

    // if there are no match, just create a new matchRequest.
    const newMatchRequest = await this.prisma.matchmakingQueue.create({
      data: {
        userId
      }
    });

    return {
      message: 'New Match Request Created for User.',
      type: 'success',
      status: 'pending'
    }
  }
}


