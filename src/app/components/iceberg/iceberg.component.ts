import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-iceberg',
  templateUrl: './iceberg.component.html',
  styleUrls: ['./iceberg.component.scss'],
})
export class IcebergComponent {
  // 0 = NADA
  // 1 = BLOQUEADO
  // 2 = ATIVO

  @Input() nivel: number = 0;

  quartaLinhaEhEstouAqui: boolean = false;
  quintaLinhaEhEstouAqui: boolean = false;
  setimaLinhaEhEstouAqui: boolean = false;
  oitavaLinhaEhEstouAqui: boolean = false;

  dadosLinhas = [
    { largura: 130, colunas: [1, 1] },
    { largura: 250, colunas: [1, 1, 1, 1] },
    { largura: 320, colunas: [1, 1, 1, 1] },
    { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
    { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
    { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
    { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
    { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
    { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
    { largura: 180, colunas: [0, 1, 0] },
  ];

  // Verifica se a quinta linha atende à condição
  ngOnInit() {
    this.quartaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[3]);
    this.quintaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[4]);
    this.setimaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[6]);
    this.oitavaLinhaEhEstouAqui = this.isFifthColumn(this.dadosLinhas[8]);
  }

  ngOnChanges() {
    this.alteraNivel();
  }

  getStatusClass(status: number): string {
    switch (status) {
      case 0:
        return 'deixeEmBranco';
      case 1:
        return 'estouBloqueado';
      case 2:
        return 'estouAqui';
      default:
        return '';
    }
  }

  // Lógica para verificar se todos os valores são 2
  isFifthColumn(dadosLinha: { largura: number; colunas: number[] }): boolean {
    const colunasSemZero = dadosLinha.colunas.filter((valor) => valor !== 0);

    // Verifica se todos os valores (exceto 0) são 2
    return colunasSemZero.every((valor) => valor === 2);
  }

  alteraNivel() {
    switch (this.nivel) {
      case 1:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 1] },
          { largura: 250, colunas: [1, 1, 1, 1] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 2:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [1, 1, 1, 1] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 3:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 1, 1, 1] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 4:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 1, 1] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 5:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 1] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 6:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [1, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 7:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 1, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 8:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 1, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 9:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 1] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 10:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 11:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 12:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 1, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 13:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 1, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 14:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 1, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 15:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 1] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 16:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [1, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 17:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 1, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 18:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 1, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 19:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 1, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 20:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 1, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 21:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 1] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 22:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 23:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 1, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 24:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 1, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 25:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 1, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 26:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 1, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 26:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 1, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 27:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 1, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 28:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 1, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 29:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 1, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 30:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 1, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 31:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 1, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 32:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 1, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 33:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 1, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 34:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 2, 1, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 35:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 2, 2, 0] },
          { largura: 200, colunas: [0, 0, 1, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 36:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 2, 2, 0] },
          { largura: 200, colunas: [0, 0, 2, 1, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 37:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 2, 2, 0] },
          { largura: 200, colunas: [0, 0, 2, 2, 0, 0] },
          { largura: 180, colunas: [0, 1, 0] },
        ];
        break;
      case 38:
        this.dadosLinhas = [
          { largura: 130, colunas: [2, 2] },
          { largura: 250, colunas: [2, 2, 2, 2] },
          { largura: 320, colunas: [2, 2, 2, 2] },
          { largura: 380, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [2, 2, 2, 2, 2, 2] },
          { largura: 350, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 330, colunas: [0, 0, 2, 2, 2, 2, 2, 0] },
          { largura: 250, colunas: [0, 2, 2, 2, 2, 0] },
          { largura: 200, colunas: [0, 0, 2, 2, 0, 0] },
          { largura: 180, colunas: [0, 2, 0] },
        ];
        break;
    }
  }
}
