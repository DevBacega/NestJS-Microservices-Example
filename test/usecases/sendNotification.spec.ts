import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { SendNotification } from '../../src/app/useCases/sendNotification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is notification',
      category: 'social',
      recipientId: 'some-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
