import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Fries and Chick',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
    ingredients: ['French Fries', 'Lemon', 'Chicken']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
    ingredients: ['Pasta', 'Meat', 'Tomatoes']
  }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id == recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
