import { Test, TestingModule } from '@nestjs/testing';
import { OceansService } from './oceans.service';

describe('OceansService', () => {
  let service: OceansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OceansService],
    }).compile();

    service = module.get<OceansService>(OceansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
