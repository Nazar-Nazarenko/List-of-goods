import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBucketComponent } from './card-bucket/card-bucket.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import  { ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBucketComponent,
    HomeComponent,
    HeaderComponent,
    BucketComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
