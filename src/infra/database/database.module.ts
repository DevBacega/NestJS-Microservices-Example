import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';
import { NotificationRepository } from 'src/app/repositories/notificationRepository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
