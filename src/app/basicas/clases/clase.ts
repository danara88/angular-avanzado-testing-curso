export class Jugador {
  public hb: number;

  constructor() {
    this.hb = 100;
  }

  recibeDanio(danio: number) {
    if (danio >= this.hb) {
      this.hb = 0;
    } else {
      this.hb -= danio;
    }
    return this.hb;
  }
}
