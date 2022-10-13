import { Body, Controller,Delete,Get,Param,Post, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { QueryCarsDto } from './dto/query-cars.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService){}


  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Post('')
  create(@Body() createCarDto:CreateCarDto): Promise<Car> {
    const newCar = this.carsService.create(createCarDto);
    return newCar;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
