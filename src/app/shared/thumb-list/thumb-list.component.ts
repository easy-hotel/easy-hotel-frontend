import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumb-list',
  templateUrl: './thumb-list.component.html',
  styleUrls: ['./thumb-list.component.css']
})
export class ThumbListComponent implements OnInit {
  @Input() items;
  @Input() limit;
  @Input() tipo;
  public readonly max = 5;
  public readonly isReadonly = true;
  public rate = 4;

  constructor() { }

  ngOnInit() {
  }

}
