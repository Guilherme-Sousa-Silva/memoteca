import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentosComponent } from '../pensamentos/pensamentos.component';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { CarregarMaisComponent } from './carregar-mais/carregar-mais.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterModule, PensamentosComponent, CarregarMaisComponent, CommonModule, FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {

  pensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  itensPorPagina: number = 6;
  haMaisPensamentos: boolean = true;
  filtro: string = "";

  constructor(
    private pensamentoService: PensamentoServiceService
  ) {}
  
  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.pensamentoService.listar(this.paginaAtual, this.itensPorPagina, this.filtro)
      .subscribe((result) => {
        this.pensamentos = result;
      })
  }

  carregarMais() {
    this.pensamentoService.listar(++this.paginaAtual, this.itensPorPagina, this.filtro)
      .subscribe(listaPensamentos => {
        this.pensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listar(this.paginaAtual, this.itensPorPagina, this.filtro)
      .subscribe((result) => {
        this.pensamentos = result;
      })
  }
}
