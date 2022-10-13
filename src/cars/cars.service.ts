import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
        
    constructor(
        @InjectRepository(Car)
        private carRepor:Repository<Car>
    ){}

    findAll(){
        return this.carRepor.find();
    }

    findOne(id: number) {
        return this.carRepor.findOne({
            where:{id}
        });
    }

    async update(id: number, updateCarDto: UpdateCarDto) {
        await this.carRepor.update({ id }, updateCarDto);
        return await this.findOne(id);
    }

    create(createCarDto: CreateCarDto):Promise<Car> {
        return this.carRepor.save(createCarDto)
    }

    remove(id: number) {
        this.carRepor.delete(id);
        return 'El auto fue eliminado';
    }
}
