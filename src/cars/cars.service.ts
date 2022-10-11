import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
       
    
    private cars : Car[] = [
        {
            "id":1,
            "modelo": "Focus",
            "año": 2015,
            "color":"Negro",
            "precio":25000.000 
        },
        {
            "id":2,
            "modelo": "K",
            "año": 2020,
            "color":"Rojo",
            "precio":15000.000 
        },
        {
            "id":3,
            "modelo": "Sandero",
            "año": 2010,
            "color":"Blanco",
            "precio":12000.000 
        }               
    ];
    
    
    findAll(modelo : string, sortBy : string, orderBy : string): Car[] {     
        let queryCars = [];   
        if(!modelo){
            queryCars = this.cars;
        }
        else {
            queryCars = this.cars.filter(function(car){
                return car.modelo.toLowerCase() == modelo.toLowerCase();
            });
        }
        
        if(!sortBy){
            return queryCars;
        }
        let orderedCars = queryCars.sort(function(a,b){
            let campoAOrdenarA = a[sortBy];
            let campoAOrdenarB = b[sortBy];
            if (campoAOrdenarA < campoAOrdenarB){
                return -1;
            }
            if (campoAOrdenarA == campoAOrdenarB){
                return 0;
            }
            return 1;
        })
        return orderedCars;
        //return 'Hello al mundo de GAMA multimarcas';
    }

    findOne(id:number):Car {
        return this.cars.find(function(car){
            return car.id == id;
        })
    }

    create(createCarDto: CreateCarDto):Car {
        let nextId = this.cars[this.cars.length-1].id + 1;
        let car : Car = new Car(nextId,createCarDto.modelo,createCarDto.año,createCarDto.color,createCarDto.precio);
        this.cars.push(car);
        return car;
    }

    update(id: number, updateCarDto: UpdateCarDto): Car {
        const car = this.findOne(id);
        car.modelo = updateCarDto.modelo;
        car.año = updateCarDto.año;
        car.color = updateCarDto.color;
        car.precio = updateCarDto.precio;
        return car;
    }

    remove(id: number): void {
        const car = this.findOne(id);
        if(!car)
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        const pos = this.cars.indexOf(car);
        this.cars.splice(pos,1);
    }
}
