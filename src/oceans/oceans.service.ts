import { Injectable } from '@nestjs/common';
import { CreateOceanDto } from './dto/create-ocean.dto';
import { UpdateOceanDto } from './dto/update-ocean.dto';

@Injectable()
export class OceansService {
  create(createOceanDto: CreateOceanDto) {
    return 'This action adds a new ocean';
  }

  findAll() {
    return `This action returns all oceans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ocean`;
  }

  update(id: number, updateOceanDto: UpdateOceanDto) {
    return `This action updates a #${id} ocean`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocean`;
  }
}
