import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationListRoutingModule } from './notification-list-routing.module';
import { NotificationListComponent } from './notification-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    NotificationListRoutingModule,
    SharedModule
  ]
})
export class NotificationListModule { }
