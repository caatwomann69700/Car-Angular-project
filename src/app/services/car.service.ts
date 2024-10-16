import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { id: 1, marque: 'Tesla', modele: 'Model S', details: 'Electric sedan with advanced autopilot features', imageUrl: 'https://cdn.drivek.com/configurator-imgs/cars/fr/Original/TESLA/MODEL-3/42960_BERLINE-4-PORTES/tesla-model-3-front-view.jpg' },
    { id: 2, marque: 'BMW', modele: '3 Series', details: 'Luxury sedan with excellent driving dynamics', imageUrl: 'https://www.bmw.lu/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png' },
    { id: 3, marque: 'Mercedes-Benz', modele: 'C-Class', details: 'Premium compact sedan with refined interior', imageUrl: 'https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/toolkit/commonassets/2022/22mercedesbenz/22mercedesbenzgla250ephevamglinesu2b/22mercedesbenzgla250ephevamglinesu2b_animations/colorpix/fr/400x300/mercedesbenz_22gla250ephevamglinesu2b_rougepatagoniem%C3%A9tallis%C3%A9manufaktur_angular-front.webp' },
    { id: 4, marque: 'Audi', modele: 'A4', details: 'Luxury sedan known for its technology and performance', imageUrl: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_1vzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT7Hr7DNZE0okb7_oe3g5J-iYpKXFXwZWoC4mSSDBvAFI8E0DEhyPGcAkyDyQIEMTiM9kyczAwFoBZEQygAAfX2lRTkFiUWKuXnlmSkmGoIYBkUCY3cU1xNHTJxgA1qqYIukAAAA?wid=850' },
    { id: 5, marque: 'Ford', modele: 'Mustang', details: 'Iconic American muscle car with powerful V8 engine', imageUrl: 'https://images.caradisiac.com/images/1/3/4/4/111344/S0-ford-mustang-deux-nouvelles-series-speciales-391847.jpg' },
    { id: 6, marque: 'Chevrolet', modele: 'Camaro', details: 'Performance-driven muscle car with sporty design', imageUrl: 'https://autopremiumgroup.ru/m/_versions/chevrolet/camaro_2023/2023_camaro_conv_3lt_rrt_1_image_series_preview.jpg' },
    { id: 7, marque: 'Porsche', modele: '911', details: 'High-performance sports car with exceptional handling', imageUrl: 'https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2018-Porsche-911-Sapphire-Blue-Metallic.jpg' },
    { id: 8, marque: 'Toyota', modele: 'RAV4', details: 'Reliable compact SUV with hybrid option', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVkRe10EIsxxBQ_tWc2IBDOhnIqC6Qg1W3Q&s' },
    { id: 9, marque: 'Honda', modele: 'Accord', details: 'Popular midsize sedan with excellent fuel efficiency', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZTnW0Sx4Ino5l_gTVnPpxoZZa74qqxGDVA&s' },
    { id: 10, marque: 'Volkswagen', modele: 'Golf', details: 'Versatile compact car with sporty performance', imageUrl: 'https://p.turbosquid.com/ts-thumb/qX/SC0Kkj/Gx/volkswagengolfgti20211/png/1609598344/600x600/fit_q87/c44589d633802c8dab9beae6049d715fe368faa9/volkswagengolfgti20211.jpg' }
  ]

  getCars(): Car[] {
    return this.cars;
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }

  deleteCar(carId: number): void {
    this.cars = this.cars.filter(car => car.id !== carId);
  }
}
