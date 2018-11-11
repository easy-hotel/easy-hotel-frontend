import { QuartoService } from './../services/quarto.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {
  public quarto;

  constructor(private quartoService: QuartoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quartoService.getQuarto(params.id).subscribe(data => this.quarto = data);
    });

  }

}
