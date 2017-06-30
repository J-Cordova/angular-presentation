import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalType } from './animaltype.enum';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AnimalService {

constructor() { }


getDogs(): Observable<Array<Animal>>
{
  return Observable.of(this.animals);
}

// tslint:disable-next-line:member-ordering
private animals: Array<Animal> = [
    {
      Name: 'Gaia',
      Picture: '../../assets/Gaia.png',
      Description: '',
      Type: AnimalType.Dog
    },
    {
      Name: 'Sage',
      Picture: 'svg-12',
      Description: '',
      Type: AnimalType.Dog
    },
    {
      Name: 'Kai',
      Picture: 'svg-13',
      Description: '',
      Type: AnimalType.Cat
    },
    {
      Name: 'Nyx',
      Picture: 'svg-14',
      Description: '',
      Type: AnimalType.Cat
    }
  ];








}
