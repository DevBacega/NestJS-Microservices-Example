import { makeNotification } from '@test/factories/notifications.factory';

import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { NotificationNotFound } from '@app/useCases/errors/NotificationNotFound.error';
import { UnreadNotification } from '@app/useCases/unreadNotification';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    expect(() =>
      unreadNotification.execute({
        notificationId: 'fakeNotificationId',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
