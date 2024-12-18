import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoServiceService } from '../../../services/pensamento-service.service';
import { CriarPensamento } from '../../../interfaces/criar-pensamento-interface';
import { Pensamento } from '../../../interfaces/pensamento-interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent implements OnInit {
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
    pensamento: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    autoria: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    modelo: new FormControl('', [Validators.required]),
  });

  constructor(
    private pensamentoService: PensamentoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  criarPensamento() {
    const { form } = this.form.value;

    const criarPensamento: CriarPensamento = {
      conteudo: form.pensamento,
      autoria: form.autoria,
      modelo: form.modelo
    }
    
    this.pensamentoService.criar(criarPensamento)
      .subscribe((result: Pensamento) => {
        if(result) {
          this.router.navigate(['/']);
        }
      })
  }
}
