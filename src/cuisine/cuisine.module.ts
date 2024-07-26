import { Module } from '@nestjs/common';
import { CuisineService } from './cuisine.service';
import { CuisineController } from './cuisine.controller';
import { Cuisine } from './cuisine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [], //TypeOrmModule.forFeature([Cuisine])],
  providers: [], //CuisineService],
  controllers: [], //CuisineController],
  exports: [], //CuisineService, TypeOrmModule.forFeature([Cuisine])],
})
export class CuisineModule {}
