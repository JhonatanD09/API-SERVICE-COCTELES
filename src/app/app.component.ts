import { Component } from '@angular/core';
import { CoctelService } from './services/coctelesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'api-service';
  ingredient = 'Ingredients'
  meassure = 'Meassures'
  name = ''
  imgUrl = ''
  ingredientsList:any = []
  meassuresList :any = []
  instructions = ''

  constructor( cs :CoctelService ){
    cs.getData().subscribe((res : any)=>{
      let data = res.drinks[0]
      this.name = data.strDrink
      this.imgUrl =data.strDrinkThumb
      for (let i = 17, j = 32 ; i < 32 && j<47; i++ , j++) {
        let obj = Object.values(data)
        this.ingredients(this.ingredientsList,obj[i])
        this.ingredients(this.meassuresList,obj[j])
      }
      this.instructions = data.strInstructions
    })
    }

    ingredients (list:any , ingredient :any){
      if(ingredient != null){
        list.push(ingredient)
      }

    }

  }

