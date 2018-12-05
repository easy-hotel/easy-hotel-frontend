import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroquartoComponent } from './cadastroquarto.component';

describe('CadastroquartoComponent', () => {
  let component: CadastroquartoComponent;
  let fixture: ComponentFixture<CadastroquartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroquartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroquartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
