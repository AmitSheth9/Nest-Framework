import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiversModule } from './rivers/rivers.module';
import { OceansModule } from './oceans/oceans.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), RiversModule, OceansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
