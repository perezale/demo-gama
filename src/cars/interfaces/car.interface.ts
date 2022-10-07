export class Car {
    id: number;
    modelo: string;
    año: number;
    color: string;
    precio: number;

    constructor(id:number,modelo:string,año:number,color:string,precio:number){
        this.id = id;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.precio = precio;
    }
}

