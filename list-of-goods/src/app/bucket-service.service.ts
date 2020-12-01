import {Injectable} from '@angular/core';
import {CardInterface} from "./cardInterface";


@Injectable({
  providedIn: 'root'
})
export class BucketServiceService {

  public items: CardInterface[] = [];

  constructor() {
    this.getDataFromLocalstorage();
  }

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

  private setDataToLocalstorage() {
    localStorage.setItem("token", JSON.stringify(this.items));
  }

  // private removeDataFromLocalstorage() {
  //   localStorage.removeItem("token");
  // }
  private getDataFromLocalstorage() {
    const stringifyData = localStorage.getItem("token");
    this.items = stringifyData ? JSON.parse(stringifyData) : [];
  }

  public addItem(item: any) {
    item.count = 1;
    this.items.push(item);
    this.getPrice();
    this.setDataToLocalstorage();
  }

  public deleteItem() {
    this.items.pop();
    this.getPrice();
    this.setDataToLocalstorage();
  }


}

