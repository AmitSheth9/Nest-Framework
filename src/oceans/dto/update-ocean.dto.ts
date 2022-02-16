import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOceanDto } from './create-ocean.dto';

export class UpdateOceanDto extends PartialType(CreateOceanDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;
}
