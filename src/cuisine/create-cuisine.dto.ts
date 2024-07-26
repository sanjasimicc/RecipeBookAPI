import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCuisineDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 70)
  name: string;
}
