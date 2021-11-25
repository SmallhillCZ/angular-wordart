import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularWordartComponent } from './components/angular-wordart.component';



@NgModule({
  declarations: [
    AngularWordartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularWordartComponent
  ]
})
export class AngularWordartModule { }
