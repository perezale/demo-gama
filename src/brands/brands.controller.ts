import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Controller('brands')
export class BrandsController {

    constructor(private brandsService:BrandsService){}

    @Get()
    findAll(){
        return this.brandsService.findAll();
    }

    @Get(':id')
    findOne(@Param()params){
        return this.brandsService.findOne(params.id);
    }

    @Post()
    create(@Body() createBrandDto:CreateBrandDto){
        return this.brandsService.create(createBrandDto);
    }

    @Put(':id')
    update(@Param('id')id:number,@Body()updateBrandDto:UpdateBrandDto):Brand {
        return this.brandsService.update(id,updateBrandDto);
    }

    /*@Post()
    create(@Body() createBrandDto:CreateBrandDto): Brand{
        return this.brandsService.create(createBrandDto);
    }*/
}
