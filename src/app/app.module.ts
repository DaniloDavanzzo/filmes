import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentRouting } from './app.rounting';
import { FilmesService } from './@core/services/filmes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentRouting,
    HttpClientModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
