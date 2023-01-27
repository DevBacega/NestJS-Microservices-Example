import { Content } from '../../src/app/entities/content';
import { Notification } from '../../src/app/entities/notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(content).toBeTruthy();
  });
});
