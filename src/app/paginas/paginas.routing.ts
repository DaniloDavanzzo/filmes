import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlterarFilmesComponent } from './alterar-filmes/alterar-filmes.component';

const routes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
            {
                path: 'inicio',
                component: InicioComponent
            },
            {
                path: 'adicionar-filme',
                component: AlterarFilmesComponent
            },
            {
                path: 'alterar-filme/:id',
                component: AlterarFilmesComponent
            },
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PaginasRouting {}