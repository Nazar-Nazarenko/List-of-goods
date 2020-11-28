import { Component, OnInit } from '@angular/core';
import {CardInterface} from "../cardInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: CardInterface [] = [
    {description: "Philips ONE Blade", price: "990$", image: "./assets/images/trimmer.jpg"},
    {description: "Philips Series 3000", price: "900$", image: "./assets/images/series-3000.jpg"},
    {description: "Philips Turbo", price: "790$", image: "./assets/images/turbo.jpg"},
    {description: "Philips ONE", price: "600$", image: "./assets/images/one.jpeg"},
    {description: "Philips BT-31", price: "970$", image: "./assets/images/bt-31.jpg"},
    {description: "Philips Series 9", price: "1120$", image: "./assets/images/series-9.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
