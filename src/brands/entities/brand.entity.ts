import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;

    @OneToMany(() => Car, 
            (car) => car.brand) //relacion  bidireccional
    cars: Car[];

    
    /*
    constructor(id:number,marca:string){
        this.id = id;
        this.marca = marca;
    }*/
    
}

