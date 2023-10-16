import { Brand } from "src/brands/entities/brand.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    brandname: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    color: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @ManyToOne(() => Brand)
    @JoinColumn({ name:'brandId'})
    brand: Brand;
}

