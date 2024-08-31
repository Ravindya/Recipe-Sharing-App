import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {FooterComponent} from "./pages/footer/footer.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthService} from "./services/Auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatToolbar, MatIconButton, NavbarComponent, FooterComponent, HomePageComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-sharing';

  user:any = null;

  constructor(public authService:AuthService) {
  }
  ngOnInit(){
    this.authService.getUserProfile().subscribe();
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state",auth);
        this.user = auth.user
      }
    )
  }
}
