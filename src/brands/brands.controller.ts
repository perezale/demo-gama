import { Body, Controller, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './interfaces/brand.interface';

@Controller('brands')
export class BrandsController {

    constructor(private brandsService:BrandsService){}

    @Post()
    create(@Body() createBrandDto:CreateBrandDto): Brand{
        return this.brandsService.create(createBrandDto);
    }
}
