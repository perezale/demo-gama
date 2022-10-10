import { Body, Controller,Get,Param,Post, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { QueryCarsDto } from './dto/query-cars.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(@Query() query: QueryCarsDto): Car[] {    //METODO
    let modelo = query.modelo;
    let sortBy = query.sortBy;
    let orderBy = query.orderBy;  
    return this.carsService.findAll(modelo,sortBy,orderBy);
  }
  
  @Get(':id')  //RECIBO TOKEN CON :
  findOne(@Param() params){
    return this.carsService.findOne(params.id);
  } 

  @Post()
  create(@Body() createCarDto:CreateCarDto){
    return this.carsService.create(createCarDto);
  }

  @Put(':id')
  update(@Param('id')id: number, @Body() updateCarDto:UpdateCarDto): Car {
    return this.carsService.update(id, updateCarDto);  
  }
}
