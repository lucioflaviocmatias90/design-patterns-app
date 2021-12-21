import { RemoteControl } from "./remote.control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);
    const newVolume = this.device.getVolume();

    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e agora tem ${newVolume}`
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);
    const newVolume = this.device.getVolume();
    
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e agora tem ${newVolume}`
    );
  }
}
