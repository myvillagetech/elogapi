import { Test, TestingModule } from '@nestjs/testing';
import { ActivityRelatedTypeController } from './activity-related-type.controller';

describe('ActivityRelatedTypeController', () => {
  let controller: ActivityRelatedTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityRelatedTypeController],
    }).compile();

    controller = module.get<ActivityRelatedTypeController>(ActivityRelatedTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
