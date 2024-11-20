import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesDetailComponent // Declara el componente de detalle
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
