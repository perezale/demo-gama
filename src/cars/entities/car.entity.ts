import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    private id: number;
    
    @Column()
    private modelo: string;

    @Column()
    private año: number;

    @Column()
    private color: string;

    @Column()
    private precio: number;

    constructor(id:number,modelo:string,año:number,color:string,precio:number){
        this.id = id;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.precio = precio;
    }
}

