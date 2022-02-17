import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOceanDto } from './dto/create-ocean.dto';
import { UpdateOceanDto } from './dto/update-ocean.dto';
import { Ocean } from './entities/ocean.entity';

@Injectable()
export class OceansService {
  constructor(@InjectRepository(Ocean) private oceanRepo: Repository<Ocean>) {}
  create(createOceanDto: CreateOceanDto) {
    return this.oceanRepo.save(createOceanDto);
  }

  findAll() {
    return this.oceanRepo.find();
  }

  findOne(id: number) {
    return this.oceanRepo.find({ id });
  }

  update(id: number, updateOceanDto: UpdateOceanDto) {
    return this.oceanRepo.update(id, updateOceanDto);
  }

  remove(id: number) {
    return this.oceanRepo.delete(id);
  }
}
