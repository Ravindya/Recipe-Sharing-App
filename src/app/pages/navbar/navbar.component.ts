import {Component, HostListener} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "../../services/Auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatButton,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user:any = null;
  isMenuVisible=false;
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
  @HostListener("document:click",['$event'])
  onDocumentClick(event:MouseEvent){
    this.isMenuVisible = false;
  }
}
