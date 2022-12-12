import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationTypeController } from './organization-type.controller';

describe('OrganizationTypeController', () => {
  let controller: OrganizationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationTypeController],
    }).compile();

    controller = module.get<OrganizationTypeController>(OrganizationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
