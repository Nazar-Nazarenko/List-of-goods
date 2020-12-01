import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {BucketServiceService} from "../bucket-service.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userProfileForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.min(6)])

  });
  submitted = false;

  onSubmit() {
    if (this.userProfileForm.invalid) {
      return;
    }
    this.submitted = true;
    const data = {
      user: this.userProfileForm.value,
      order: this.bucketServiceService.items
    }
    console.log(data);
  }

  constructor(private bucketServiceService: BucketServiceService) { }

  ngOnInit(): void {
  }

}
