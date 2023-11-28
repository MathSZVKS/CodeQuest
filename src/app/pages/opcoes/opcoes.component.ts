import { Component, EventEmitter, Output } from '@angular/core';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {
  constructor(public audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play(1);
    this.audioService.volumeHomeChanged.subscribe((volume) => {});
    this.audioService.volumeJogoChanged.subscribe((volume) => {});
  }

  onVolumeChange(audioNumber: number, { target }: Event) {
    const inputElement = target as HTMLInputElement;
    if (inputElement) {
      const newVolume = inputElement.value;
      if (newVolume !== undefined && newVolume !== null) {
        this.audioService.setVolume(audioNumber, +newVolume);
      }
    }
  }

  @Output() fecharModal = new EventEmitter<void>();

  fecharOpcoes() {
    this.fecharModal.emit();
  }

}
