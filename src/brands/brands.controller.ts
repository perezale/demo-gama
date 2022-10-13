import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Controller('brands')
export class BrandsController {

    constructor(private brandsService:BrandsService){}

    @Get()
    findAll(){
        return this.brandsService.findAll();
    }

    @Post('')
    create(@Body() createBrandDto:CreateBrandDto): Promise<Brand> {
        const newBrand = this.brandsService.create(createBrandDto);
        return newBrand;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.brandsService.remove(+id);
    }


    /*@Get(':id')
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

    @Delete(':id')
    remove(@Param('id')id:number):void{
        return this.brandsService.remove(id);
    }*/
}
