import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {

  public pensamento: any = {
    id: '1',
    conteudo: 'Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  public criarPensamento(): void {
    
  }

  public cancelar(): void {

  }
}
