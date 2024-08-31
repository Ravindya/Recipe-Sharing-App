import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {UpdateRecipeFormComponent} from "../../update-recipe-form/update-recipe-form.component";
import {RecipeService} from "../../services/Recipe/recipe.service";

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    NgOptimizedImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardAvatar,
    MatIconButton,
    MatIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  likedRecipes: Set<number> = new Set();
  @Input()
  recipe:any;
  recipes: any[] = [];
  constructor(public dialog:MatDialog, private recipeService:RecipeService) {}
    handleOpenEditRecipeForm(){
    this.dialog.open(UpdateRecipeFormComponent,{
      data:this.recipe});
  }
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((state) => {
      this.recipes = state.recipes;
    });

    // Fetch initial data from API
    this.recipeService.fetchRecipesFromApi();
  }

  onDelete(recipeId: any): void {
    this.recipeService.deleteRecipe(recipeId).subscribe({
      next: () => console.log('Recipe deleted successfully'),
      error: (err) => console.log('Error deleting recipe', err)
    });
  }


  onLike(recipeId: any): void {
    if (this.likedRecipes.has(recipeId)) {
      this.likedRecipes.delete(recipeId); // Unliking the recipe
    } else {
      this.likedRecipes.add(recipeId); // Liking the recipe
    }
    this.recipeService.likeRecipe(recipeId).subscribe({
      next: () => console.log('Recipe liked successfully'),
      error: (err) => console.error('Error liking recipe', err)
    });
  }
  isLiked(recipeId: number): boolean {
    return this.likedRecipes.has(recipeId);
  }
}
