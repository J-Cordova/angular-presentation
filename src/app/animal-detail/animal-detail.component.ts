import { Component, Input } from '@angular/core';
import { Animal } from '../shared/animal.model';
import { AnimalSelectedService } from '../shared/animal-selected.service';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.html',
  styleUrls: ['./animal-detail.css'],
})
export class AnimalDetailComponent
{
  @Input() selectedAnimal: Animal;
  //selectedAnimal: Animal;
  constructor(private animalSelectService: AnimalSelectedService)
  {
     //animalSelectService.animalSelectedEvent.subscribe(animal => this.selectedAnimal = animal);
  }

}
