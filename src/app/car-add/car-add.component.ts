import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-car-add',
  imports: [ NgFor,NgIf,FormsModule],
  standalone: true,
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent {
  newCar: Partial<Car> = {};

  constructor(private carService: CarService, private router: Router) {}

  addCar(): void {
    const cars = this.carService.getCars();
    const newId = cars.length ? Math.max(...cars.map(car => car.id)) + 1 : 1;
    const car: Car = { ...this.newCar, id: newId, imageUrl: 'https://picsum.photos/200/300' } as Car;
    this.carService.addCar(car);
    this.router.navigate(['/']);
  }
}
