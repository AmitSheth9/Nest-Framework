import { Injectable } from '@nestjs/common';
import { CreateRiverDto } from './dto/create-river.dto';
import { UpdateRiverDto } from './dto/update-river.dto';
import { River } from './entities/river.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RiversService {
  constructor(@InjectRepository(River) private riverRepo: Repository<River>) {}
  create(createRiverDto: CreateRiverDto) {
    return this.riverRepo.save(createRiverDto);
  }

  findAll() {
    return `This action returns all rivers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} river`;
  }

  update(id: number, updateRiverDto: UpdateRiverDto) {
    return `This action updates a #${id} river`;
  }

  remove(id: number) {
    return `This action removes a #${id} river`;
  }
}
