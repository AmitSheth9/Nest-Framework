import { Test, TestingModule } from '@nestjs/testing';
import { RiversController } from './rivers.controller';
import { RiversService } from './rivers.service';

describe('RiversController', () => {
  let controller: RiversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiversService],
      controllers: [RiversController],
    }).compile();

    controller = module.get<RiversController>(RiversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
