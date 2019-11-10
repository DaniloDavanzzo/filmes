import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PaginasComponent } from './paginas.component';
import { AlterarFilmesComponent } from './alterar-filmes/alterar-filmes.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasRouting } from './paginas.routing';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginasRouting,
        ComponentesModule
    ],
    declarations: [
        PaginasComponent,
        AlterarFilmesComponent,
        InicioComponent
    ],
    exports: [],
})
export class PaginasModule { }