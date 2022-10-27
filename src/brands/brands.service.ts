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
        let result = this.brandRepor.findOne({
            where:{id}
        });
        if(result === null)
            throw new HttpException('The brand does not exist',HttpStatus.NOT_FOUND);
        return result;
    }

    async update(id: number, updateBrandDto: UpdateBrandDto) {
        await this.brandRepor.update({ id }, updateBrandDto);
        return await this.findOne(id);
    }

    create(createBrandDto:CreateBrandDto){
        return this.brandRepor.save(createBrandDto)    
    }
    
    handleConstrainError({ code }) {
        if (code === '23503')
            throw new HttpException('ERROR, no se puede eliminar',HttpStatus.CONFLICT);
        throw new HttpException('ERdfkhajkROR',HttpStatus.INTERNAL_SERVER_ERROR);
    }

    async remove(id: number) {
        const brand = this.findOne(id);
        if (!brand)
            throw new HttpException('NO LLUEVE MAS!!',HttpStatus.NOT_FOUND);
        await this.brandRepor.delete(id).catch(this.handleConstrainError);
        return 'REMOVED';
    }
    
    
}
