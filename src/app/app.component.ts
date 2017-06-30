import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';

import {DialogComponent} from './dialog/dialog.component';
import { AnimalService } from './shared/animal.service';
import { Animal } from './shared/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  animals: Array<Animal>;
  selectedAnimal: Animal;
  isDarkTheme = false;

  constructor(private dialog: MdDialog, private animalService: AnimalService)
  {
    animalService.getDogs().subscribe((animals) => this.animals = animals);
  }

  // private openAdminDialog()
  // {
  //   this.dialog.open(DialogComponent).afterClosed()
  //     .filter(result => !!result)
  //     .subscribe(user => {
  //       this.users.push(user);
  //       this.selectedUser = user;
  //     });
  // }

}
