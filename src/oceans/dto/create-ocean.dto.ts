import { ApiProperty } from '@nestjs/swagger';

export class CreateOceanDto {
  @ApiProperty()
  name: string;
}
