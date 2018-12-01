import { TypeInput } from './../../enum/type-input.enum';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() control;
  @Input() label;
  @Input() type;
  @Input() placeholder;
  public typeInput = TypeInput;

  constructor() { }

  ngOnInit() {
  }

}
