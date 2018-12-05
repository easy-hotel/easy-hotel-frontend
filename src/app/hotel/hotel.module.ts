import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { RatingModule, CarouselModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HotelComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM',
    }),
    SharedModule,
    CarouselModule.forRoot(),
  ]
})
export class HotelModule { }
