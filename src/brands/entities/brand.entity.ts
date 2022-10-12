import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    /*
    constructor(id:number,nombre:string){
        this.id = id;
        this.nombre = nombre;
    }*/
    
}

