import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
      
    
    private cars = [
        {
            "id":1,
            "modelo": "K",
            "año": 2015,
            "color":"Negro",
            "precio":15000.000 
        }           
    ];
    
    
    findAll(){
        return this.cars;
        //return 'Hello al mundo de GAMA multimarcas';
    }

    findOne(id: any) {
        return this.cars.find(function(car){
            return car.id == id;
        })
    }

    create(createCarDto: CreateCarDto) {
        let nextId = this.cars[this.cars.length-1].id + 1;
        let car = {
            "id": nextId,
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }
}
