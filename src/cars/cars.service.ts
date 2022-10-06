import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
      
    
    private cars : Car[] = [
        {
            "id":1,
            "modelo": "K",
            "año": 2015,
            "color":"Negro",
            "precio":15000.000 
        }           
    ];
    
    
    findAll(): Car[] {  
        return this.cars;
        //return 'Hello al mundo de GAMA multimarcas';
    }

    findOne(id:number):Car {
        return this.cars.find(function(car){
            return car.id == id;
        })
    }

    create(createCarDto: CreateCarDto):Car {
        let nextId = this.cars[this.cars.length-1].id + 1;
        let car : Car = {
            id  : nextId,
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }
}
