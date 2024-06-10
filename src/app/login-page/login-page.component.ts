import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordManagerService } from '../password-manager.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  // public get auth(): Auth {
  //   return this.auth;
  // }
  // public set auth(value: Auth) {
  //   this.auth = value;
  // }

  constructor(
    private passwordManager: PasswordManagerService,
    private router: Router
  ) {
    console.log('constructed successfully!');
  }
  ngOnInit() {
    this.registerFormData();
    this.logInFormData();
  }

  registerForm!: FormGroup;
  registerFormData() {
    this.registerForm = new FormGroup({
      registerEmail: new FormControl('', Validators.required),
      registerPassword: new FormControl('', Validators.required),
      registerNumber: new FormControl('', Validators.required),
    });
  }

  logInForm!: FormGroup;
  logInFormData() {
    this.logInForm = new FormGroup({
      loginEmail: new FormControl('', Validators.required),
      loginPassword: new FormControl('', Validators.required),
      loginNumber: new FormControl('', Validators.required),
    });
  }

  onLogIn(values: any) {
    this.passwordManager
      .login(values.loginEmail, values.loginPassword)
      .then(() => {
        this.router.navigate(['/siteList']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onRegister(values: any) {
    this.passwordManager
      .create(values.registerEmail, values.registerPassword)
      .then(() => {
        this.router.navigate(['/siteList']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
