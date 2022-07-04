import { EventEmitter } from '@angular/core';

export class Jugador2 {
  public hb: number;
  public hbCambia = new EventEmitter<number>();

  constructor() {
    this.hb = 100;
  }

  recibeDanio(danio: number) {
    if (danio >= this.hb) {
      this.hb = 0;
    } else {
      this.hb -= danio;
    }

    this.hbCambia.emit(this.hb);
  }
}
