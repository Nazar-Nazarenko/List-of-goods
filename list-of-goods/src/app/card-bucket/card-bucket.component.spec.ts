import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBucketComponent } from './card-bucket.component';

describe('CardBucketComponent', () => {
  let component: CardBucketComponent;
  let fixture: ComponentFixture<CardBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
