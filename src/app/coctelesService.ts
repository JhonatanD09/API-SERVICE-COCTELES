import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

export class CoctelService{
  url ='https://www.thecocktaildb.com/api/json/v1/1/random.php'
  constructor(private http :HttpClient ){}

  getData(){
    return this.http.get(this.url)
  }
}
