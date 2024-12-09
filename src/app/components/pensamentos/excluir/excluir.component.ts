import { Component, OnInit } from '@angular/core';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../../../interfaces/pensamento-interface';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.scss'
})
export class ExcluirComponent implements OnInit {

  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

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

  excluirPensamento() {
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id)
      .subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
