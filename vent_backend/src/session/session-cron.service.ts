import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SessionCronService {
  private readonly logger = new Logger(SessionCronService.name)
  constructor(
    private prisma: PrismaService
  ){}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async expireOldSessions(){
    const now = new Date();
    const expired = await this.prisma.session.updateMany({
      where: {
        status: 'ACTIVE',
        expiresAt: {
          lt: now
        }
      },
      data: {
        status: 'ENDED'
      }
    });

    this.logger.log(`Expired ${expired.count} sessions.`)
  }
}