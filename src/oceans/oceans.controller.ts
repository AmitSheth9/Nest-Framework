import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OceansService } from './oceans.service';
import { CreateOceanDto } from './dto/create-ocean.dto';
import { UpdateOceanDto } from './dto/update-ocean.dto';

@Controller('oceans')
export class OceansController {
  constructor(private readonly oceansService: OceansService) {}

  @Post()
  create(@Body() createOceanDto: CreateOceanDto) {
    return this.oceansService.create(createOceanDto);
  }

  @Get()
  findAll() {
    return this.oceansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oceansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOceanDto: UpdateOceanDto) {
    return this.oceansService.update(+id, updateOceanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oceansService.remove(+id);
  }
}
