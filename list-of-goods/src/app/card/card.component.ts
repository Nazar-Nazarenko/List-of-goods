import {Component, Input, OnInit} from '@angular/core';
import {CardInterface} from "../cardInterface";
import {BucketServiceService} from "../bucket-service.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public buttonName: string = 'ADD TO BUCKET';

  @Input() cardElement: CardInterface | any;

  constructor(public bucketServiceService: BucketServiceService) {
  }

  ngOnInit(): void {
  }

  public addToBucket(card: any) {
    this.bucketServiceService.addItem(card);
  }


}
