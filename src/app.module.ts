import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/entities/car.entity';
import { Brand } from './brands/entities/brand.entity';

require('dotenv').config()

const db_options = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'carlos',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'my_db',
}

console.log(db_options);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_options,      
      entities: [Car,Brand],
      synchronize: true,
    }),    
    CarsModule, BrandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
