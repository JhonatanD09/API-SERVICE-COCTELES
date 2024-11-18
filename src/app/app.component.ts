import { Component } from '@angular/core';
import { CoctelService } from './services/coctelesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'COCTELS';
  ingredient = 'Ingredients'
  meassure = 'Meassures'
  name = ''
  imgUrl = ''
  ingredientsList:any = []

  instructions = ''

  constructor( private cs :CoctelService ){
    this.getCoctel()
  }

  getCoctel(){
    this.cs.getData().subscribe((res : any)=>{
      let data = res.drinks[0]
      this.name = data.strDrink
      this.imgUrl =data.strDrinkThumb
      this.instructions = data.strInstructions

      for(let i = 0; i < 15 ; i++) {
        const ingredient = data[`strIngredient${i + 1}`];
        const measure = data[`strMeasure${i + 1}`];

        if(ingredient && measure){
          this.ingredientsList.push({ingredient: ingredient, measure: measure})
        }
      }
    })
  }

  nextCoctel(){
  this.name = ''
  this.imgUrl = ''
  this.ingredientsList = []
  this.instructions = ''
    this.getCoctel()
  }

}

