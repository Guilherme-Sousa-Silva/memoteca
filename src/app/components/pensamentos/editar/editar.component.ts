import { Component, OnInit } from '@angular/core';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent implements OnInit {

  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

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

  constructor(
    private pensamentoService: PensamentoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.buscarPensamentoPorId(id!);
  }

  buscarPensamentoPorId(id: string) {
    this.pensamentoService.buscarPorId(id)
      .subscribe((result: Pensamento) => {
        this.pensamento = result;
      })
  }

  editar() {
    this.pensamentoService.editar(this.pensamento)
      .subscribe((result: Pensamento) => {
        if(result) {
          this.router.navigate(['/']);
        }
      })
  }
}
