import { Test, TestingModule } from '@nestjs/testing';
import { ActivityMasterdataService } from './activity-masterdata.service';

describe('ActivityMasterdataService', () => {
  let service: ActivityMasterdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityMasterdataService],
    }).compile();

    service = module.get<ActivityMasterdataService>(ActivityMasterdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
