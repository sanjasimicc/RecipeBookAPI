import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuisine } from './cuisine.entity';
import { Repository } from 'typeorm';
import { CreateCuisineDto } from './create-cuisine.dto';

@Injectable()
export class CuisineService {
  constructor(
    @InjectRepository(Cuisine)
    private cuisineRepository: Repository<Cuisine>,
  ) {}

  async create(createCuisineDto: CreateCuisineDto): Promise<Cuisine> {
    const cuisine = this.cuisineRepository.create(createCuisineDto);
    return this.cuisineRepository.save(cuisine);
  }

  async findAll(): Promise<Cuisine[]> {
    return this.cuisineRepository.find();
  }

  async findById(id: string): Promise<Cuisine> {
    return this.cuisineRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCuisineDto: CreateCuisineDto,
  ): Promise<Cuisine> {
    await this.cuisineRepository.update(id, updateCuisineDto);
    return this.cuisineRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    const cuisine = this.findById(id);
    if (cuisine != null) {
      await this.cuisineRepository.delete(id);
    }
  }
}
