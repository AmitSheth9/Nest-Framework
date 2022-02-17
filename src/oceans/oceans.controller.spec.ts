import { Test, TestingModule } from '@nestjs/testing';
import { OceansController } from './oceans.controller';
import { OceansService } from './oceans.service';

describe('OceansController', () => {
  let controller: OceansController;
  let service: OceansService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [OceansController],
      providers: [OceansService],
    }).compile();

    service = moduleRef.get<OceansService>(OceansService);
    controller = moduleRef.get<OceansController>(OceansController);
  });

  describe('findAll', () => {
    it('should return an array of oceans', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAll').mockImplementation(() => result['']);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
