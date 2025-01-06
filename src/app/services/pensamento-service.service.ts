import { HttpClient, HttpParams } from '@angular/common/http';
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

  public listar(pagina: number, itensPorPagina: number, filtro: string): Observable<Pensamento[]> {
    // GET /posts?_page=20&_limit=10

    let params = new HttpParams()
      .set("_page", pagina.toString())
      .set("_limit", itensPorPagina.toString())

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro.trim())
    }

    // return this.http.get<Pensamento[]>(`${this.api}?_page=${pagina}&_limit=${itensPorPagina}`);
    return this.http.get<Pensamento[]>(this.api, {params: params});
  }

  public buscarPorId(id: string): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.api}/${id}`);
  }

  public criar(pensamento: CriarPensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  public excluir(id: string): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.api}/${id}`);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.api}/${pensamento.id}`, pensamento);
  }
}
