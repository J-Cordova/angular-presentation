import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import {DomSanitizer} from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
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

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog, private animalService: AnimalService)
  {
    const catSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/Cat.svg');
    const dogSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/Dog.svg');
    iconRegistry.addSvgIcon('Cat', catSafeUrl);
    iconRegistry.addSvgIcon('Dog', dogSafeUrl);

    const sub: Subscription =  animalService.getAnimals().subscribe((animals) =>
    {
      this.animals = animals;
      if (animals.length) this.selectedAnimal = animals[0];
    });

    sub.unsubscribe();
  }

  private openAdminDialog()
  {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(user => {
        // this.users.push(user);
        // this.selectedUser = user;
      });
  }

}
