import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    HomeComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class HomeModule { }
