import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const NB_MODULES = [
  IonicModule,
  ReactiveFormsModule,
  FormsModule
];

const COMPONENTS = [];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
