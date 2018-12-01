import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuartoComponent } from './quarto.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [QuartoComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM',
    })
  ]
})
export class QuartoModule { }
