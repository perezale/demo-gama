import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Injectable()
export class BrandsService {
    

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
}
