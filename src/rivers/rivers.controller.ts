import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RiversService } from './rivers.service';
import { CreateRiverDto } from './dto/create-river.dto';
import { UpdateRiverDto } from './dto/update-river.dto';

@Controller('rivers')
export class RiversController {
  constructor(private readonly riversService: RiversService) {}

  @Post()
  create(@Body() createRiverDto: CreateRiverDto) {
    return this.riversService.create(createRiverDto);
  }

  @Get()
  findAll() {
    return this.riversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riversService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiverDto: UpdateRiverDto) {
    return this.riversService.update(+id, updateRiverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riversService.remove(+id);
  }
}
