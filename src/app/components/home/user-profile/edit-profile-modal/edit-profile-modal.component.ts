import { AuthenticationService } from './../../../../auth/services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent implements OnInit {

  userProfile = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    birthday: ['', Validators.required],
  });

  isSubmitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public modalController: ModalController,
    public dialogRef: MatDialogRef<EditProfileModalComponent>,
    private authService: AuthenticationService
    ) {
    this.userProfile.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      city: data.city,
      birthday: data.birthday
    });
  }

  ngOnInit(): void {
  }

  updateProfile(): void {
    this.isSubmitted = true;
    console.log(this.userProfile.valid);
    if(this.userProfile.valid) {
      console.log(this.userProfile.value);
     this.authService.updateProfile(this.userProfile.value).subscribe(response => {
       this.dialogRef.close(response);
     });
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.userProfile.controls;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
