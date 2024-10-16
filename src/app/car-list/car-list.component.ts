import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CarDetailsComponent } from '../car-details/car-details.component'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CarDetailsComponent],  // Ajoute CarDetailsComponent ici
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  selectedCar?: Car;
  searchText: string = '';

  constructor(private carService: CarService, private router: Router) {
    this.cars = this.carService.getCars();
    this.filteredCars = [...this.cars];
  }

  selectCar(car: Car): void {
    this.selectedCar = car;
  }

  deleteCar(carId: number): void {
    this.carService.deleteCar(carId);
    this.filteredCars = this.carService.getCars();
    if (this.selectedCar?.id === carId) {
      this.selectedCar = undefined;
    }
  }

  filterCars(): void {
    if (this.searchText.length < 3) {
      this.filteredCars = [...this.cars];
      return;
    }
    const lowerSearch = this.searchText.toLowerCase();
    this.filteredCars = this.cars.filter(car =>
      car.marque.toLowerCase().startsWith(lowerSearch) ||
      car.modele.toLowerCase().startsWith(lowerSearch)
    );
  }

  goToAddPage(): void {
    this.router.navigate(['/add']);
  }
  
}
