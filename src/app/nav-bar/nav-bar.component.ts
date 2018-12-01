import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('login') login;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModal() {
    this.modalRef = this.modalService.show(this.login);
  }
}
