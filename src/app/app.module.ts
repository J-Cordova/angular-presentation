import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalSideNavComponent } from './animal-sidenav/animal-sidenav.component';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { AnimalService } from './shared/animal.service';
import { AnimalSelectedService } from './shared/animal-selected.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    AnimalSideNavComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [AnimalService, AnimalSelectedService],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
