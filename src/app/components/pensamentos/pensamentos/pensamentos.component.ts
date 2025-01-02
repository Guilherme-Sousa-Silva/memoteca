import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { CommonModule } from '@angular/common';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamentos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamentos.component.html',
  styleUrl: './pensamentos.component.scss'
})
export class PensamentosComponent implements OnInit {

  pensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  itensPorPagina: number = 6;

  constructor(
    private pensamentoService: PensamentoServiceService
  ) {}
  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.pensamentoService.listar(this.paginaAtual, this.itensPorPagina)
      .subscribe((result) => {
        this.pensamentos = result;
      })
  }
}
