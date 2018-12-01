import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Input() isDisable: boolean;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}
