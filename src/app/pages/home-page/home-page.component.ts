import { Component } from '@angular/core';
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {CreateRecipeFormComponent} from "../../create-recipe-form/create-recipe-form.component";
import {AuthService} from "../../services/Auth/auth.service";
import {RecipeService} from "../../services/Recipe/recipe.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatFabButton,
    MatIcon,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  recipes = [];


  constructor(public dialog:MatDialog , public authService:AuthService , private recipeService:RecipeService) {
  }

  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe();
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        this.recipes=state.recipes
      }
    )
  }
}
