import { PartialType } from '@nestjs/mapped-types';
import { CreateRiverDto } from './create-river.dto';

export class UpdateRiverDto extends PartialType(CreateRiverDto) {}
