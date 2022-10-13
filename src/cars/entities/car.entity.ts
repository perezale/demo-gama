import { Brand } from "src/brands/entities/brand.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    modelo: string;

    @Column()
    año: number;

    @Column()
    color: string;

    @Column()
    precio: number;

    @ManyToOne(() => Brand)
    @JoinColumn({ name:'brandId'})
    brand: Brand;
  
    

    /*constructor(id:number,modelo:string,año:number,color:string,precio:number){
        this.id = id;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.precio = precio;
    }*/
}

