import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Series[] = [];
  averageSeasons: number = 0;
  selectedSeries: Series | null = null; // Nueva propiedad para la serie seleccionada

  constructor(private seriesService: SeriesService) {}

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = totalSeasons / this.series.length;
    }
  }

  selectSeries(series: Series) {
    this.selectedSeries = series; // Método para seleccionar la serie
  }

  ngOnInit() {
    this.getSeries();
  }
}
