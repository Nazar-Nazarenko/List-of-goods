import { Component } from '@angular/core';
import {BucketServiceService} from "./bucket-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BucketServiceService]
})
export class AppComponent {

  title = 'list-of-goods';
}
