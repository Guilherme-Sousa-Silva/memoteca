import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent implements OnInit {
  modelos: any[] = [{
    id: 1,
    imagem: '../../../../assets/imagens/modelo1.png',
    label: 'modelo 1',
    informacao: 'modelo1'
  },
  {
    id: 2,
    imagem: '../../../../assets/imagens/modelo2.png',
    label: 'modelo 2',
    informacao: 'modelo2'
  },
  {
    id: 3,
    imagem: '../../../../assets/imagens/modelo3.png',
    label: 'modelo 3',
    informacao: 'modelo3'
  }];

  pensamento: string = '';
  autoria: string = '';

  ngOnInit(): void {
  }

  criarPensamento() {
    throw new Error('Method not implemented.');
  }

  cancelar() {
    throw new Error('Method not implemented.');
  }
}
