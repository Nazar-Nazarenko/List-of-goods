import {Component, OnInit} from '@angular/core';
import {BucketServiceService} from "../bucket-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public bucketButton: boolean = true;
  public homeButton: boolean = false;

  constructor(public bucketServiceService: BucketServiceService) {
  }

  ngOnInit(): void {
  }

  hideBucket() {
    this.bucketButton = false;
    this.homeButton = true;
  }

  showHomeButton() {
    this.bucketButton = true;
    this.homeButton = false;
  }


}
