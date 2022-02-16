import { Module } from '@nestjs/common';
import { OceansService } from './oceans.service';
import { OceansController } from './oceans.controller';

@Module({
  controllers: [OceansController],
  providers: [OceansService]
})
export class OceansModule {}
