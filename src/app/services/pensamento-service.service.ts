import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../interfaces/pensamento-interface';
import { Observable } from 'rxjs';
import { CriarPensamento } from '../interfaces/criar-pensamento-interface';

@Injectable({
  providedIn: 'root'
})
export class PensamentoServiceService {

  private readonly api = 'http://localhost:3000/pensamentos'

  constructor(
    private http: HttpClient
  ) { }

  public listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.api);
  }

  public criar(pensamento: CriarPensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }
}