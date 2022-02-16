import { ApiProperty } from '@nestjs/swagger';

export class CreateRiverDto {
  @ApiProperty()
  name: string;
}
