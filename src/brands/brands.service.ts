import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Injectable()
export class BrandsService {

    private brands = [
        {
            "id":"1",
            "nombre":"Toyota"
        }
    ];


    findAll(){
        return this.brands; 
    }

    create(createBrandDto: CreateBrandDto): Brand {
        
        let brand : Brand = {
            id: 5,
            ...createBrandDto
        }
        return brand;
    }
    

}
