import { makeNotification } from '@test/factories/notifications.factory';

import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { NotificationNotFound } from '@app/useCases/errors/NotificationNotFound.error';
import { ReadNotification } from '@app/useCases/readNotification';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    expect(() =>
      readNotification.execute({
        notificationId: 'fakeNotificationId',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
