import { Component, Input, OnInit } from '@angular/core';
import { CardInterface} from "../cardInterface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() cardElement: CardInterface | any
  constructor() { }

  ngOnInit(): void {
  }

}
