import { Component, Output, Input, EventEmitter} from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { Animal } from '../shared/animal.model';
import { AnimalService } from '../shared/animal.service';
import { AnimalSelectedService } from '../shared/animal-selected.service';



@Component({
  selector: 'animal-sidenav',
  //templateUrl: './animal-sidenav.html',
  template: `    
  <md-sidenav mode="side" opened>
      <md-nav-list>
        <h2 style="text-align:center;">Animals</h2>
        <md-list-item  *ngFor="let animal of animals" (click)="onAnimalSelected(animal)">        
           <md-icon svgIcon="{{animal.Avatar}}" class="avatar"></md-icon>
          <h3 style="padding-left: 1em">{{animal.Name}}</h3>
        </md-list-item>
      </md-nav-list>
    </md-sidenav> `,
  styleUrls: ['./animal-sidenav.css'],
})
export class AnimalSideNavComponent
{
  @Input() animals: Array<Animal>;
  @Output() selectedAnimal: EventEmitter<Animal> = new EventEmitter();

  constructor(private animalSelectService: AnimalSelectedService)
  {}

  onAnimalSelected(animal: Animal)
  {
    //this.animalSelectService.animalSelectedEvent.emit(animal);
    this.selectedAnimal.emit(animal);
  }
}
