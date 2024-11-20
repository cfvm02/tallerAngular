import { Component, Input } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent {
  @Input() seriesDetail: Series | null = null; // Entrada para la serie seleccionada
}
