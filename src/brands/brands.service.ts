import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
    

    constructor(
        @InjectRepository(Brand)
        private brandRepor:Repository<Brand>
    ){}

    findAll(){
        return this.brandRepor.find();
    }

    findOne(id: number) {
        return this.brandRepor.findOne({
            where:{id}
        });
    }

    async update(id: number, updateBrandDto: UpdateBrandDto) {
        await this.brandRepor.update({ id }, updateBrandDto);
        return await this.findOne(id);
    }

    create(createBrandDto:CreateBrandDto):Promise<Brand>{
        return this.brandRepor.save(createBrandDto)    
    }
    
    remove(id: number) {
        this.brandRepor.delete(id);
        return 'La marca fue eliminada';
    }
}
