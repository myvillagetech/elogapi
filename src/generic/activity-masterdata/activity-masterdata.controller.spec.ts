import { Test, TestingModule } from '@nestjs/testing';
import { ActivityMasterdataController } from './activity-masterdata.controller';

describe('ActivityMasterdataController', () => {
  let controller: ActivityMasterdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityMasterdataController],
    }).compile();

    controller = module.get<ActivityMasterdataController>(ActivityMasterdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
