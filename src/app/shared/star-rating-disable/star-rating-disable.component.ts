import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating-disable',
  templateUrl: './star-rating-disable.component.html',
  styleUrls: ['./star-rating-disable.component.css']
})
export class StarRatingDisableComponent implements OnInit {

  @Input() rating: number;
  @Input() itemId: number;
  @Input() isDisable: boolean;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
}
