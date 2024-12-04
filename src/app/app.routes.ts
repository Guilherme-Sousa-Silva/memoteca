import { Routes } from '@angular/router';
import { ListarComponent } from './components/pensamentos/listar/listar.component';

export const routes: Routes = [{
    path: '',
    component: ListarComponent,
    },
    {
        path: 'criar-pensamento',
        loadComponent: () => import('./components/pensamentos/create/create.component').then(m => m.CreateComponent),
    }
];
