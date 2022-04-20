import { Component } from '@angular/core';
import { CoctelService } from './coctelesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'api-service';
  name = ''
  imgUrl = ''
  ingredientsList:any = []
  constructor( cs :CoctelService ){
    cs.getData().subscribe((res : any)=>{
      let data = res.drinks[0]
      this.name = data.strDrink
      this.imgUrl =data.strDrinkThumb
      for (let index = 17; index < 32; index++) {
        let obj = Object.values(data)
        this.ingredients(obj[index])
      }
    })
    }

    ingredients (ingredient :any){
      if(ingredient != null){
        this.ingredientsList.push(ingredient)
      }
    }
  }

