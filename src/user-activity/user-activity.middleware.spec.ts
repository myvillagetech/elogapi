import { UserActivityMiddleware } from './user-activity.middleware';

describe('UserActivityMiddleware', () => {
  it('should be defined', () => {
    expect(new UserActivityMiddleware()).toBeDefined();
  });
});
