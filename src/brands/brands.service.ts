import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

    constructor(
        @InjectRepository(Brand)
        private brandRepor:Repository<Brand>
    ){

    }

    findAll(){
        return this.brandRepor.find();
    }
        
/*
    private brands : Brand [] = [   
        {
            "id":1,
            "nombre":"Toyota"
        },
        {
            "id":2,
            "nombre":"Nissan"
        },
        {
            "id":3,
            "nombre":"Mitsubishi"
        }
    ];


    findAll(): Brand[] {
        return this.brands; 
    }

    findOne(id: number) : Brand {
        return this.brands.find(function(brand){
            return brand.id == id;
        });
    }

    create(createBrandDto: CreateBrandDto): Brand {
        let nextId = this.brands[this.brands.length-1].id+1;
        let brand : Brand = new Brand(nextId,createBrandDto.nombre);
        this.brands.push(brand);
        return brand;
    }

    update(id: number, updateBrandDto: any): Brand {
        const brand = this.findOne(id);
        brand.nombre = updateBrandDto.nombre;
        return brand;
    }

    remove(id: number): void {
        const brand = this.findOne(id);
        if(!brand)
            throw new HttpException('Not found',HttpStatus.NOT_FOUND);
        const pos = this.brands.indexOf(brand);
        this.brands.splice(pos,1);
    }*/
}
