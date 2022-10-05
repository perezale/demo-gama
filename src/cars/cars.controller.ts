import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {    //METODO 
    return this.carsService.findAll();
  }
  
  @Get(':id')  //RECIBO TOKEN CON :
  findOne(@Param() params){
    return this.carsService.findOne(params.id);
  } 

  @Post()
  create(@Body() createCarDto:CreateCarDto){
    return "Auto agregado";
  }
}
