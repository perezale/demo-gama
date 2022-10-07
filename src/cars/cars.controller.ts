import { Body, Controller,Get,Param,Post, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(@Query() query) {    //METODO
    let modelo = query.modelo;
    return this.carsService.findAll(modelo);
  }
  
  @Get(':id')  //RECIBO TOKEN CON :
  findOne(@Param() params){
    return this.carsService.findOne(params.id);
  } 

  @Post()
  create(@Body() createCarDto:CreateCarDto){
    return this.carsService.create(createCarDto);
  }
}
