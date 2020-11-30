import {Component, Input, OnInit} from '@angular/core';
import {CardInterface} from "../cardInterface";
import {BucketServiceService} from "../bucket-service.service";

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  @Input() cardBucketElement: CardInterface | any;

  public cards: CardInterface[];

  constructor(public bucketServiceService: BucketServiceService) {
    this.cards = this.bucketServiceService.items;
  }

  ngOnInit(): void {
  }

}
