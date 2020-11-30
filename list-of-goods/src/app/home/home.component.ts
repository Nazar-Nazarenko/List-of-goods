import { Component, OnInit } from '@angular/core';
import {CardInterface} from "../cardInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: CardInterface [] = [
    {description: "Philips ONE Blade", price: 990, image: "./assets/images/trimmer.jpg", count: 0},
    {description: "Philips Series 3000", price: 900, image: "./assets/images/series-3000.jpg", count: 0},
    {description: "Philips Turbo", price: 790, image: "./assets/images/turbo.jpg", count: 0},
    {description: "Philips ONE", price: 600, image: "./assets/images/one.jpeg", count: 0},
    {description: "Philips BT-31", price: 970, image: "./assets/images/bt-31.jpg", count: 0},
    {description: "Philips Series 9", price: 1120, image: "./assets/images/series-9.jpg", count: 0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
