import { Test, TestingModule } from '@nestjs/testing';
import { OceansController } from './oceans.controller';
import { OceansService } from './oceans.service';

describe('OceansController', () => {
  let controller: OceansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OceansController],
      providers: [OceansService],
    }).compile();

    controller = module.get<OceansController>(OceansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
