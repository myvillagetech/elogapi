import { Test, TestingModule } from '@nestjs/testing';
import { CompanySettingsService } from './company-settings.service';

describe('CompanySettingsService', () => {
  let service: CompanySettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanySettingsService],
    }).compile();

    service = module.get<CompanySettingsService>(CompanySettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
