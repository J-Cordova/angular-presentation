import { Component, Input } from '@angular/core';
import { Animal } from '../shared/animal.model';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.html',
  styleUrls: ['./animal-detail.css'],
})
export class AnimalDetailComponent
{
  @Input() selectedAnimal: Animal;
}
