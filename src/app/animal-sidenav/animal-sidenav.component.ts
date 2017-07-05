import { Component, Output, Input, EventEmitter} from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from '../shared/animal.model';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'animal-sidenav',
  templateUrl: './animal-sidenav.html',
  styleUrls: ['./animal-sidenav.css'],
})
export class AnimalSideNavComponent
{
  @Input() animals: Array<Animal>;
  @Output() selectedAnimal: EventEmitter<Animal> = new EventEmitter();

  onAnimalSelected(animal: Animal)
  {
    this.selectedAnimal.emit(animal);
  }
}
