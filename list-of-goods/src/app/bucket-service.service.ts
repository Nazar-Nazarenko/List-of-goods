import {Injectable} from '@angular/core';
import { CardInterface} from "./cardInterface";


@Injectable({
  providedIn: 'root'
})
export class BucketServiceService {

  public items: CardInterface[] = [];


  getPrice() {
    let total = 0;
    this.items.forEach(function (item) {
      item.price;
      for (let i = 0; i < item.count; i++) {
        total = total + item.price;
      }
    });
    return total;
  }

  public addItem(item: any) {
    item.count = 1;
    this.items.push(item);
    this.getPrice();
    localStorage.setItem("token",JSON.stringify(this.items));
  }
  public  deleteItem() {
    this.items.pop();
    this.getPrice();
    localStorage.removeItem("token");
  }


  constructor() {
  }


}

