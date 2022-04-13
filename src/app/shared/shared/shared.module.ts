import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


const NB_MODULES = [
  IonicModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule,
  MatDividerModule,
  MatSelectModule,
  MatIconModule
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
