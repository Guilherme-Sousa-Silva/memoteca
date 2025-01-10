import {Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { CommonModule } from '@angular/common';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pensamentos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamentos.component.html',
  styleUrl: './pensamentos.component.scss'
})
export class PensamentosComponent implements OnInit {

  @Input() pensamentos: Pensamento[] = [];
  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  } 
  
  constructor(
    private pensamentoService: PensamentoServiceService
  ) {}


  ngOnInit(): void {
  }

  async favoritar(pensamentoId: string) {
    this.pensamento = await this.buscarPensamentoPorId(pensamentoId);
    if (this.pensamento) {
      await lastValueFrom(this.pensamentoService.mudarFavorito(this.pensamento));
      
      this.pensamentos = this.pensamentos.map(pensamento =>
        pensamento.id === pensamentoId ? { ...this.pensamento } : pensamento
      );
    }
  }
  
  async buscarPensamentoPorId(pensamentoId: string): Promise<Pensamento> {
    return await lastValueFrom(this.pensamentoService.buscarPorId(pensamentoId));
  }
}
