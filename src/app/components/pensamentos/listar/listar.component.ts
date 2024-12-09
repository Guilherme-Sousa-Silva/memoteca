import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentosComponent } from '../pensamentos/pensamentos.component';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterModule, PensamentosComponent],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {


}
