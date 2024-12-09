import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { CriarPensamento } from '../../../interfaces/criar-pensamento-interface';
import { Pensamento } from '../../../interfaces/pensamento-interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
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
  modeloSelecionado: string = '';

  constructor(
    private pensamentoService: PensamentoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  criarPensamento() {
    const criarPensamento: CriarPensamento = {
      conteudo: this.pensamento,
      autoria: this.autoria,
      modelo: this.modeloSelecionado
    }
    
    this.pensamentoService.criar(criarPensamento)
      .subscribe((result: Pensamento) => {
        if(result) {
          this.router.navigate(['/']);
        }
      })
  }
}
