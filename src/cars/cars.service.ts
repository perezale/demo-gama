import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CarsService {
        
    constructor(
        @InjectRepository(Car)
        private carRepor:Repository<Car>
    ){}

    async findAllByModel(model: string){
        const carsModel = await this.carRepor.find({
            where:{model}
        });
        return carsModel;       
    }
        
    async findAll(){
        const cars = await this.carRepor.find({
            relations:['brand']
        });
        return cars;
    }

    async findOne(id: number) {
        const car = await this.carRepor.findOne({
            where:{id},
            relations:['brand']
        });
        if(!car){
            throw new NotFoundException('El auto no existe','NOT EXIST');
        }
        return car;
    }

    async update(id: number, updateCarDto: UpdateCarDto) {
        const existeCar = await this.findOne(id);
        await this.carRepor.update({ id }, updateCarDto);
        const updateCar = await this.findOne(id);
        return updateCar;
    }

    create(createCarDto: CreateCarDto):Promise<Car> {
        return this.carRepor.save(createCarDto);
    }

    async remove(id: number) {
        const brand = await this.carRepor.findOneBy({id});
        if (brand == null)
            throw new HttpException('Does not exits',HttpStatus.NOT_FOUND);
        
        await this.carRepor.delete(id);
        return 'Eliminated car';
    }
}
