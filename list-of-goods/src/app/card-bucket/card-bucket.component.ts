import {Component, Input, OnInit} from '@angular/core';
import {CardInterface} from "../cardInterface";
import {BucketServiceService} from "../bucket-service.service";


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

  constructor(public bucketServiceService: BucketServiceService) { }

  ngOnInit(): void {
  }
  growNumber() {
    this.cardBucketElement.count++;
  }

  lessNumber() {
    if (this.cardBucketElement.count > 1) {
      this.cardBucketElement.count--;
    }else if(this.cardBucketElement.count === 1) {
      this.bucketServiceService.deleteItem();
    }

  }

}
