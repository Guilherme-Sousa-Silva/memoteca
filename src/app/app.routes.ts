import { Routes } from '@angular/router';
import { ListarComponent } from './components/pensamentos/listar/listar.component';

export const routes: Routes = [{
    path: '',
    component: ListarComponent,
    },
    {
        path: 'criar-pensamento',
        loadComponent: () => import('./components/pensamentos/create/create.component').then(m => m.CreateComponent),
    },
    {
        path: 'pensamentos/excluir-pensamento/:id',
        loadComponent: () => import('./components/pensamentos/excluir/excluir.component').then(m => m.ExcluirComponent),
    },
    {
        path: 'pensamentos/editar-pensamento/:id',
        loadComponent: () => import('./components/pensamentos/editar/editar.component').then(m => m.EditarComponent),
    },
];
