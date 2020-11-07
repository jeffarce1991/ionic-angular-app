import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [{
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
    ingredients: ['French Fries', 'Lemon', 'Vegetable']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
    ingredients: ['Pasta', 'Meat', 'Tomatoes']
  }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
