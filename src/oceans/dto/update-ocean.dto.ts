import { PartialType } from '@nestjs/mapped-types';
import { CreateOceanDto } from './create-ocean.dto';

export class UpdateOceanDto extends PartialType(CreateOceanDto) {}
