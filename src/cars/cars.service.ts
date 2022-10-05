import { Injectable } from '@nestjs/common';

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
}
