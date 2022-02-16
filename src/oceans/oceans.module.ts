import { Module } from '@nestjs/common';
import { OceansService } from './oceans.service';
import { OceansController } from './oceans.controller';
import { Ocean } from './entities/ocean.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ocean])],
  controllers: [OceansController],
  providers: [OceansService],
})
export class OceansModule {}
