import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesModule } from 'src/app/@core/models/filmes.module';

import {Filmes} from 'src/app/@core/consts/filmes.const';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public filmes: Array<FilmesModule> = new Array<FilmesModule>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() { 
    this.filmes = Filmes;
  }

  /**
   * função responsavel por navegar até a tela de edição de filmes
   * @param {number} id propriedade corresponde ao id do filme 
   */
  public editarFilme(id: number): void {
    this.router.navigate([`alterar-filme/${id}`]);
  }

}
