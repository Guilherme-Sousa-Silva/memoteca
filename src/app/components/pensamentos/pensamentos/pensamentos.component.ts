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

  pensamentos: Pensamento[] = []

  constructor(
    private pensamentoService: PensamentoServiceService
  ) {}
  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.pensamentoService.listar()
      .subscribe((result) => {
        this.pensamentos = result;
      })
  }
}
