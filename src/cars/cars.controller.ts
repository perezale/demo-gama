import { Controller,Get } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly appService: CarsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
