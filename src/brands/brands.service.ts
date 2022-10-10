import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Injectable()
export class BrandsService {
    

    private brands = [
        {
            "id":"1",
            "nombre":"Toyota"
        },
        {
            "id":"2",
            "nombre":"Nissan"
        },
        {
            "id":"3",
            "nombre":"Mitsubishi"
        }
    ];


    findAll(){
        return this.brands; 
    }

    findOne(id: any) {
        return this.brands.find(function(brand){
            return brand.id == id;
        });
    }

    create(createBrandDto: CreateBrandDto): Brand {
        
        let brand : Brand = {
            id: 5,
            ...createBrandDto
        }
        return brand;
    }
    

}
