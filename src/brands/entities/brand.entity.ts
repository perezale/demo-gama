import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Car, 
            (car) => car.brand) //relacion  bidireccional
    cars: Car[];

    /*
    constructor(id:number,nombre:string){
        this.id = id;
        this.nombre = nombre;
    }*/
    
}

