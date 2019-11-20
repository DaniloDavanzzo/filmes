import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: './paginas/paginas.module#PaginasModule'
    },
    {
        path: '**',
        redirectTo: 'inicio',
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class ComponentRouting {}