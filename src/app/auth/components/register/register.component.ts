import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.isSubmitted = true;
    console.log(this.userForm.valid);
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.userForm.controls;
  }

}
