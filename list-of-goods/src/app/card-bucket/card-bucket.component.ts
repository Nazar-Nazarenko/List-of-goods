import {Component, Input, OnInit} from '@angular/core';
import {CardInterface} from "../cardInterface";


@Component({
  selector: 'app-card-bucket',
  templateUrl: './card-bucket.component.html',
  styleUrls: ['./card-bucket.component.scss']
})
export class CardBucketComponent implements OnInit {
  @Input() cardBucketElement: CardInterface | any;
  value: number = 1;
  plus: string = '+';
  minus: string = '-';

  constructor() { }

  ngOnInit(): void {
  }
  growNumber() {
    this.cardBucketElement.count++;
  }

  lessNumber() {
    this.cardBucketElement.count--;
  }

}
