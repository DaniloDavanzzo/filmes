import { Component, OnInit } from '@angular/core';
import { FilmesModule } from 'src/app/@core/models/filmes.module';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public filme: FilmesModule;

  constructor() { }

  ngOnInit() {
    this.filme = new FilmesModule();
  }

}
