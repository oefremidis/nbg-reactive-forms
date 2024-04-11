import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe], //NgIF
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  // 2. more than one inputs
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  // 3. adding validators
  // loginForm!: FormGroup;

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // }


  // 4. using form builder
  loginForm!: FormGroup;

  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], //min max maxLength
      password: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]] 
    });
  }


  // getter
  // getEmail(){
  //   return this.loginForm.get('email');
  // }

  // using property
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  loginUser(): void {
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);

    console.log(this.loginForm.get('email'));
    console.log(this.loginForm.get('password'));

    // add the login logic here....
    // something like
    // this.http.post('dasfas', JSON.stringify(this.loginForm.value))
  }







}
