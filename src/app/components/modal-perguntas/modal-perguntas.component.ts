import { Component, EventEmitter, Output } from '@angular/core';
import { PerguntasService } from 'src/app/service/perguntas.service';

@Component({
  selector: 'app-modal-perguntas',
  templateUrl: './modal-perguntas.component.html',
  styleUrls: ['./modal-perguntas.component.scss'],
})
export class ModalPerguntasComponent {
  constructor(private servicePerguntas: PerguntasService) {}

  @Output() exportNivel = new EventEmitter<number>();
  @Output() errouPergunta = new EventEmitter<boolean>();

  nivel = 1;
  perguntas = this.servicePerguntas.getPerguntas();
  alternativaSelecionada = '';

  verificarResposta(pergunta: any) {
    if (this.alternativaSelecionada == pergunta.alternativaCorreta) {
      this.alternativaSelecionada = '';
      this.nivel++;
      this.exportNivel.emit(this.nivel);
    }else {
      this.errouPergunta.emit(true);
    }
  }
}
