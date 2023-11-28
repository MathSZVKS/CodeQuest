import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioHome: HTMLAudioElement;
  private audioJogo: HTMLAudioElement;

  volumeHome: number = 15;
  volumeJogo: number = 15;

  volumeHomeChanged = new EventEmitter<number>();
  volumeJogoChanged = new EventEmitter<number>();

  constructor() {
    this.audioHome = new Audio();
    this.audioHome.src = '../../assets/som/PinkFox_-_Farewell_Memories__Full_Version_.mp3';
    this.audioHome.loop = true;

    this.audioJogo = new Audio();
    this.audioJogo.src = '../../assets/som/rfsound_-_Dark_Epic_Build_Up__Full_.mp3';
    this.audioJogo.loop = true;

    this.audioHome.volume = this.volumeHome / 100;
    this.audioJogo.volume = this.volumeJogo / 100;
  }

  configureVolumes(volumeHome: number, volumeJogo: number): void {
    this.volumeHome = volumeHome;
    this.volumeJogo = volumeJogo;

    this.audioHome.volume = this.volumeHome / 100;
    this.audioJogo.volume = this.volumeJogo / 100;
  }

  play(audioNumber: number = 1) {
    if (audioNumber === 1) {
      this.audioHome.play();
    } else if (audioNumber === 2) {
      this.audioJogo.play();
    }
  }

  pause(audioNumber: number = 1) {
    if (audioNumber === 1) {
      this.audioHome.pause();
    } else if (audioNumber === 2) {
      this.audioJogo.pause();
    }
  }

  playpause(audioNumber: number = 1): boolean {
    if (audioNumber === 1) {
      return !this.audioHome.paused;
    } else if (audioNumber === 2) {
      return !this.audioJogo.paused;
    }

    return false;
  }

  setVolume(audioNumber: number, volume: number) {
    const audio = audioNumber === 1 ? this.audioHome : this.audioJogo;
  
    if (audioNumber === 1) {
      this.volumeHome = volume;
      this.volumeHomeChanged.emit(volume);
    } else if (audioNumber === 2) {
      this.volumeJogo = volume;
      this.volumeJogoChanged.emit(volume);
    }
  
    audio.volume = volume / 100;
  }

  getVolume(audioNumber: number): number {
    const audio = audioNumber === 1 ? this.audioHome : this.audioJogo;
    return audio.volume * 100;
  }
}