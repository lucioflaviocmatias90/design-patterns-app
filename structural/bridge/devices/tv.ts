import { Device } from "./device";

export class Tv implements Device {
  private readonly name = 'TV';
  private power = false;
  private volume = 10;

  getName() {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}