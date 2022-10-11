import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/interfaces/car.interface';
import { Brand } from './brands/interfaces/brand.interface';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'my_db',
      username: 'carlos',
      password: '123456',      
      entities: [Car,Brand],
      synchronize: true,
    }),    
    CarsModule, BrandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
