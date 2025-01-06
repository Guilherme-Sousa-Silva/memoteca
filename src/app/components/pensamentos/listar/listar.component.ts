import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentosComponent } from '../pensamentos/pensamentos.component';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { CarregarMaisComponent } from './carregar-mais/carregar-mais.component';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterModule, PensamentosComponent, CarregarMaisComponent],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {

  pensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  itensPorPagina: number = 6;
  haMaisPensamentos: boolean = true;

  constructor(
    private pensamentoService: PensamentoServiceService
  ) {}
  
  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.pensamentoService.listar(this.paginaAtual, this.itensPorPagina)
      .subscribe((result) => {
        this.pensamentos = result.data;
      })
  }

  carregarMais() {
    this.pensamentoService.listar(++this.paginaAtual, this.itensPorPagina)
      .subscribe(listaPensamentos => {

        if(this.pensamentos.length >= listaPensamentos.items) {
          this.haMaisPensamentos = false;
        }
        else {
          this.pensamentos.push(...listaPensamentos.data);
        }

        if(!listaPensamentos.data.length) {
          this.haMaisPensamentos = false;
        }
      })
  }
}
