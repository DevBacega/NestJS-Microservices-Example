import { DatabaseModule } from '@infra/database/database.module';
import { SendNotification } from '@app/useCases/sendNotification';

import { Module } from '@nestjs/common';
import { CancelNotification } from './cancelNotification';
import { CountRecipientNotification } from './countRecipientNotification';
import { GetRecipientNotification } from './getRecipientNotification';
import { ReadNotification } from './readNotification';
import { UnreadNotification } from './unreadNotification';

@Module({
  imports: [DatabaseModule],
  exports: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class UseCaseModule {}
