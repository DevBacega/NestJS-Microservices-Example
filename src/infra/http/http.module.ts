import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { UseCaseModule } from '@app/useCases/useCase.module';

@Module({
  imports: [DatabaseModule, UseCaseModule],
  controllers: [NotificationsController],
})
export class HttpModule {}
