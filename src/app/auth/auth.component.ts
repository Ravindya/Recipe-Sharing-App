import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CommonModule, NgClass, NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {AuthService} from "../services/Auth/auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgOptimizedImage,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    MatIconButton,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isRegister= false;

  constructor(public authService:AuthService) {
  }

  registrationForm = new FormGroup({
    fullName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)])
  });

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
  });

  toggleRegister() {
    this.isRegister = !this.isRegister;
  }

  handleRegister(){
    console.log("register ",this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("signup success",response)
      }
    })
  }

  handleLogin(){
    console.log("login ",this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("login success",response)
      }
    })
  }

  hide = true;
  password: string='';

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
