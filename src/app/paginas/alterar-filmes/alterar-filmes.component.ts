import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { FilmesModule } from 'src/app/@core/models/filmes.module';
import { FilmesService } from 'src/app/@core/services/filmes.service';

@Component({
  selector: 'app-alterar-filmes',
  templateUrl: './alterar-filmes.component.html',
  styleUrls: ['./alterar-filmes.component.css']
})
export class AlterarFilmesComponent implements OnInit {

  public id: number
  public filme: FilmesModule = new FilmesModule();

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private filmesServices: FilmesService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.buscarFilme(this.id);
  }

  private buscarFilme(id: any): void {
    if(id) {
      this.filme = this.filmesServices.getFilmesById(id);
    }
  }

  finalizar(): void {
    /* this.filmesServices.addFilme(this.filme)
    .subscribe(result => {
      console.log('teste', result);
      
    }, error => {
     console.log(error);
    }) */
    this.route.navigate(['/inicio'])
  }

}
