import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingDisableComponent } from './star-rating-disable.component';

describe('StarRatingDisableComponent', () => {
  let component: StarRatingDisableComponent;
  let fixture: ComponentFixture<StarRatingDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
