import { ActivatedRoute } from '@angular/router';
import { QuartoService } from './../services/quarto.service';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public readonly max = 5;
  public hotel;
  public quartos;
  public readonly isReadonly = true;
  public rate = 4;
  lat = 51.678418;
  lng = 7.809007;

  constructor(private route: ActivatedRoute, private quartoService: QuartoService, private hotelService: HotelService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quartoService.getQuartoByHotel(params.hotelId).subscribe(quartos => this.quartos = quartos);
      this.hotelService.getHotel(params.hotelId).subscribe(hotel => this.hotel = hotel);
    });
  }

}
