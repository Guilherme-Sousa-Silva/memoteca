import { Component, OnInit } from '@angular/core';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pensamento } from '../../../interfaces/pensamento-interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
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

  form: FormGroup = new FormGroup({
    pensamento: new FormControl('', [
      Validators.required,
      Validators.minLength(5), 
      Validators.maxLength(100), 
      Validators.pattern(/(.|\s)*\S(.|\s)*/)]),
    autoria: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(50), 
      Validators.pattern(/(.|\s)*\S(.|\s)*/)]),
    modelo: new FormControl('', [Validators.required]),
  });

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
    if (this.form.valid) {
      this.pensamentoService.editar(this.pensamento)
      .subscribe((result: Pensamento) => {
        if(result) {
          this.router.navigate(['/']);
        }
      })
    }
  }
}
