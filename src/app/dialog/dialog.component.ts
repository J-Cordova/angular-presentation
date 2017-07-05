import { AnimalType } from '../shared/animaltype.enum';
import { Animal } from '../shared/animal.model';
import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  animal: Animal = new Animal();
  Type: String = '0';
  avatars: Array<String> = ['Dog', 'Cat'];
  selectedAvatar = this.avatars[0];

  handleAnimalTypeChange($event)
  {
    const val: Number = parseInt($event.value, 10);
    this.animal.Type = (val === 0 ? AnimalType.Dog : AnimalType.Cat);
    this.selectedAvatar = (this.animal.Type === AnimalType.Dog ? 'Dog' : 'Cat');
  }
}
