import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  @Input() car!: Car;
  @Output() close = new EventEmitter<void>(); // Émetteur d'événement vers le parent

  clearDetails(): void {
    this.close.emit(); // Émet l'événement de fermeture
  }
}
