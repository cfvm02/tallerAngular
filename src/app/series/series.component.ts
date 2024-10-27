import { Component, OnInit } from '@angular/core';
import { Series } from './series.js';
import { SeriesService } from './series.service.js';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Series[] = [];
  averageSeasons: number = 0;

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

  ngOnInit() {
    this.getSeries();
  }
}
