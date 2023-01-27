import { makeNotification } from '@test/factories/notifications.factory';
import { CancelNotification } from './../../src/app/useCases/cancelNotification';
import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { NotificationNotFound } from '@app/useCases/errors/NotificationNotFound.error';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() =>
      cancelNotification.execute({
        notificationId: 'fakeNotificationId',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
