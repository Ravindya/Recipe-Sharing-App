import {Component, Inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {RecipeService} from "../services/Recipe/recipe.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatRadioButton,
        MatRadioGroup
    ],
  templateUrl: './update-recipe-form.component.html',
  styleUrl: './update-recipe-form.component.css'
})
export class UpdateRecipeFormComponent {
  recipeItem: any={
    title:"",
    description:"",
    foodType:'',
    image:''
  }

  constructor(@Inject(MAT_DIALOG_DATA) public recipe:any,private recipeService:RecipeService) {
  }

  onSubmit() {
    this.recipeService.UpdateRecipe(this.recipeItem).subscribe({
      next:data => console.log("update",data),
      error:error => console.log("error",error)
    })
    console.log("values",this.recipeItem)
  }

  ngOnInit(){
    this.recipeItem=this.recipe
  }
}
