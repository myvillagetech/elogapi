import { Test, TestingModule } from '@nestjs/testing';
import { ActivityRelatedTypeService } from './activity-related-type.service';

describe('ActivityRelatedTypeService', () => {
  let service: ActivityRelatedTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityRelatedTypeService],
    }).compile();

    service = module.get<ActivityRelatedTypeService>(ActivityRelatedTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
