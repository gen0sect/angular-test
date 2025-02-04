import { Component, inject } from "@angular/core";
import { Carservice } from "./car.service";

@Component({
    selector: 'car-root',
    template: `<p>{{Carservice.getCars()}}</p>`,
})
export class CarsComponent{
    Carservice = inject(Carservice)
}