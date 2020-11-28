import { Component, OnInit } from '@angular/core';
import { CardInterface} from "../cardInterface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public bucketButton:boolean = true;
 public homeButton:boolean = false;


  constructor() { }

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
