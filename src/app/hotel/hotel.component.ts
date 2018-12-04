import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotel;
  lat = 51.678418;
  lng = 7.809007;

  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.hotelService.getHotels().subscribe(data => this.hotel = data[0]);
  }

}
