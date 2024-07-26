import { Module } from '@nestjs/common';
import { CuisineModule } from './cuisine/cuisine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'database/datasource';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    //  CuisineModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
