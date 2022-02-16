import { Module } from '@nestjs/common';
import { RiversService } from './rivers.service';
import { RiversController } from './rivers.controller';
import { River } from './entities/river.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([River])],
  controllers: [RiversController],
  providers: [RiversService],
})
export class RiversModule {}
