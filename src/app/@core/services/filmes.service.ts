import { Injectable } from '@angular/core';
import { FilmesModule } from '../models/filmes.module';

import { Filmes } from 'src/app/@core/consts/filmes.const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable()
export class FilmesService {

  private url: 'localhost:1000'

  private headers: Headers = new Headers();

  private filmes: Array<FilmesModule> = Filmes;

  constructor(private http: HttpClient) { }

  public getAllFilmes(): Observable<FormsModule> {
    return this.http.get<FormsModule>(this.url + '/getAllFilmes');
  }

  public getFilmePorId(id): Observable<FormsModule> {
    return this.http.get<FormsModule>(this.url + `/getFilmesById/${id}`);
  }

  public addFilme(filme: FilmesModule): Observable<FormsModule> {
    return this.http.post<FormsModule>(this.url + 'addFilme', filme);
  }

  public upadateFilme(id: number, filme: FilmesModule): Observable<FormsModule> {
    return this.http.put<FormsModule>(this.url + `/updateFilme/${id}`, filme);
  }

  public getFilmesById(id: any): FilmesModule {
    const filme = this.filmes.filter(filme => filme.id === parseInt(id))[0]
    return filme;
  }

}
