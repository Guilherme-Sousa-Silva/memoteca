import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carregar-mais',
  standalone: true,
  imports: [],
  templateUrl: './carregar-mais.component.html',
  styleUrl: './carregar-mais.component.scss'
})
export class CarregarMaisComponent {

@Input() haMaisPensamentos: boolean = false;

}
