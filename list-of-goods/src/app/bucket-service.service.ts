import {Injectable} from '@angular/core';
import { CardInterface} from "./cardInterface";
import {count} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BucketServiceService {
  // public items: any = [] | localeStorage.getItem('');
  public items: CardInterface[] = [];

  getPrice() {
    let total = 0;
    this.items.forEach(function (item) {
      item.price;
      for (let i =0; i < item.count; i++) {
        total = total + item.price;
      }
      console.log('item price', item.price);
    });
    return total;
  }

  public addItem(item: any) {
    item.count = 1;
    this.items.push(item);
    this.getPrice();

  }

  // public  plusItem() {
  //   let sum = this.getPrice();
  //   sum = this.getPrice()+ sum;
  //   console.log('sum', sum);
  //   return sum;
  // }

  // public  plusItem(item:any) {
  //   this.items.push(item);
  // }
  // public minusItem() {
  //   this.items.pop();
  // }

  constructor() {
  }
}

