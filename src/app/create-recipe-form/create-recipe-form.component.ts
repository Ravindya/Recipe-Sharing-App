import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {RecipeService} from "../services/Recipe/recipe.service";

@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    MatButton,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './create-recipe-form.component.html',
  styleUrl: './create-recipe-form.component.css'
})
export class CreateRecipeFormComponent {
  recipeItem: any={
    title:"",
    description:"",
    foodType:'',
    image:''
  }

  constructor(private recipeService:RecipeService) {
  }

  onSubmit() {
    console.log("values",this.recipeItem);
    this.recipeService.createRecipe(this.recipeItem).subscribe({
      next:data => console.log("created recipe",data),
      error:error => console.log("error",error)
      }
    )
  }
}
