import { Injectable, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalType } from './animaltype.enum';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnimalSelectedService {

constructor() { }

animalSelectedEvent: EventEmitter<Animal> = new EventEmitter();

}
