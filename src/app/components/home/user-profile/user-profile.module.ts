import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileModalComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
