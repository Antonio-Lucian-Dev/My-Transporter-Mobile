import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { UserProfile } from './../../../auth/interface/userProfile';
import { UserAdminProfile } from './../../../auth/interface/userAdminProfile';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { NavController } from '@ionic/angular';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserAdminProfile | UserProfile;

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.findUserProfile(null).subscribe(userProfile => {
      console.log(userProfile);
      this.userProfile = userProfile;
     // console.log(this.userProfile);
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  openEditProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalComponent, {
      data: this.userProfile,
      panelClass: 'custom-dialog',
      height: '490px'
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log(`${response}`);
    });
  }

}
