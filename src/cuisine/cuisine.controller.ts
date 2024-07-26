import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CuisineService } from './cuisine.service';
import { CreateCuisineDto } from './create-cuisine.dto';
import { Cuisine } from './cuisine.entity';

@Controller('cuisine')
export class CuisineController {
  constructor(private readonly cuisineService: CuisineService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createCuisineDto: CreateCuisineDto): Promise<Cuisine> {
    return this.cuisineService.create(createCuisineDto);
  }

  @Get()
  findAll(): Promise<Cuisine[]> {
    return this.cuisineService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Cuisine> {
    return this.cuisineService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(ValidationPipe) updateCuisineDto: CreateCuisineDto,
  ): Promise<Cuisine> {
    return this.cuisineService.update(id, updateCuisineDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.cuisineService.delete(id);
  }
}
