import { PartialType } from '@nestjs/mapped-types';
import { CreateRiverDto } from './create-river.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRiverDto extends PartialType(CreateRiverDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;
}
