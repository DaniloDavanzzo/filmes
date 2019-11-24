import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesModule } from 'src/app/@core/models/filmes.module';

import {Filmes} from 'src/app/@core/consts/filmes.const';
import { FilmesService } from 'src/app/@core/services/filmes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public filmes: Array<FilmesModule> = new Array<FilmesModule>();

  constructor(
    private filmesServices: FilmesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmes = Filmes;
    this.getFilmes();
  }

  private getFilmes(): void {
    this.filmesServices.getAllFilmes()
      .subscribe(result => {
        console.log('teste', result);
        // this.filmes = result;
      }, error => {
       console.log(error);
      })
  }

  /**
   * função responsavel por navegar até a tela de edição de filmes
   * @param {number} id propriedade corresponde ao id do filme
   */
  public editarFilme(id: number): void {
    this.router.navigate([`alterar-filme/${id}`]);
  }

}
