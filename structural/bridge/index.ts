/*
  Visão geral do Adapter

  - Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração
    da sua implementação, de modo que as duas possam variar e evoluir independentemente.

  Abstração e Implementação

  - Abstração é um código de alto nível que geralmente delega ações para outro objeto.
  - Implementação é o código que realmente faz o trabalho.
*/

import { Radio } from "./devices/radio";
import { Tv } from "./devices/tv";
import { RemoteControl } from "./remote.control";
import { RemoteControlWithVolume } from "./remote.control .with.volume";

function clientCode(abstraction: RemoteControl|RemoteControlWithVolume) {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio()

const radioRemoteControl = new RemoteControlWithVolume(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

clientCode(radioRemoteControl);
clientCode(tvRemoteControl);
