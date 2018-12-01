import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ThumbListComponent } from './thumb-list/thumb-list.component';
import { FormInputComponent } from './form-input/form-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ComentarioComponent } from './comentario/comentario.component';
import { StarRatingDisableComponent } from './star-rating-disable/star-rating-disable.component';

@NgModule({
  declarations: [ThumbListComponent, FormInputComponent, StarRatingComponent, CalendarComponent, ComentarioComponent, StarRatingDisableComponent],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [ThumbListComponent, FormInputComponent, StarRatingComponent, CalendarComponent, ComentarioComponent]
})
export class SharedModule { }
