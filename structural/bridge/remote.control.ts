import { Device } from "./devices/device";

export class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`
    );
  }
}
