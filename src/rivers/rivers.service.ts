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
    return this.riverRepo.find();
  }

  findOne(id: number) {
    return this.riverRepo.find({ id });
  }

  update(id: number, updateRiverDto: UpdateRiverDto) {
    return this.riverRepo.update(id, updateRiverDto);
  }

  remove(id: number) {
    return this.riverRepo.delete(id);
  }
}
