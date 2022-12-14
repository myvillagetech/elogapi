import { Test, TestingModule } from '@nestjs/testing';
import { ActivityTypeController } from './activity-type.controller';

describe('ActivityTypeController', () => {
  let controller: ActivityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityTypeController],
    }).compile();

    controller = module.get<ActivityTypeController>(ActivityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
