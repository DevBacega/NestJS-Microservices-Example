import { GetRecipientNotification } from './../../src/app/useCases/getRecipientNotification';
import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { makeNotification } from '@test/factories/notifications.factory';

describe('Get recipients notification', () => {
  it('should be able to get recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotification = new GetRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient2' }),
    );

    const { notifications } = await countRecipientNotification.execute({
      recipientId: 'recipient1',
    });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient1' }),
        expect.objectContaining({ recipientId: 'recipient1' }),
      ]),
    );
  });
});
