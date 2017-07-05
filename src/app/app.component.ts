import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { AnimalFactory } from './shared/animal.factory';
import { Animal } from './shared/animal.model';
import { AnimalService } from './shared/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
{

  animals: Array<Animal>;
  selectedAnimal: Animal;

  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer,
              private dialog: MdDialog, private animalService: AnimalService)
  {
    this.registerIcons();

    const sub: Subscription =  animalService.getAnimals()
    // .filter(x => x.length > 5)
    .subscribe((animals) =>
    {
      this.animals = animals;
      if (animals.length) this.selectedAnimal = animals[0];
    });

    sub.unsubscribe();
  }

  onAnimalSelected($event)
  {
    this.selectedAnimal = $event;
  }

  openAnimalDialog()
  {
    const self = this;
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(data => {
         const animal: Animal = AnimalFactory.CreateAnimal(data);
         self.animals.push(animal);
         self.selectedAnimal = animal;
      });
  }

  registerIcons()
  {
    const catSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/Cat.svg');
    const dogSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/Dog.svg');
    this.iconRegistry.addSvgIcon('Cat', catSafeUrl);
    this.iconRegistry.addSvgIcon('Dog', dogSafeUrl);
  }
}
