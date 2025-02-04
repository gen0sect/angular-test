import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Carservice{
    cars = ['Ford', ' Chevy', ' Buick'];
    
    getCars(): string[]{
        return this.cars;
    }

    getCar(id: number) {
        return this.cars[id];
    };
}

