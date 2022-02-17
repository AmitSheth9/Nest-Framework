import { Test, TestingModule } from '@nestjs/testing';
import { OceansController } from './oceans.controller';
import { OceansService } from './oceans.service';

describe('OceansController', () => {
  let controller: OceansController;
  let service: OceansService;
  let ocean = 'Pacific';

  beforeEach(async () => {
    service = new OceansService();
    controller = new OceansController(service);
  });

  describe('findAll', () => {
    it('should return an array of oceans', async () => {
      const oceans = [1, 'Indian'];
      jest.spyOn(service, 'findAll').mockImplementation(() => oceans);

      expect(await controller.findAll()).toEqual(oceans);
    });
  });
});
