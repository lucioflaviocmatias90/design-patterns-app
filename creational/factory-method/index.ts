abstract class Passagem {
  public origem: string;
  public destino: string;
  public horaPartida: Date;

  constructor(origem: string, destino: string, horaPartida: Date) {
    this.origem = origem;
    this.destino = destino;
    this.horaPartida = horaPartida;
  }

  public abstract exibirDetalhes(): void;
}

class PassagemOnibusInterestadual extends Passagem {
  constructor(origem: string, destino: string, horaPartida: Date) {
    super(origem, destino, horaPartida);
  }

  public exibirDetalhes(): void {
    console.log(
      `PASSAGEM DE ONIBUS INTERESTADUAL \nOrigem: ${this.origem} \nDestino: ${this.destino} \nHora Partida: ${this.horaPartida}\n\n`
    );
  }
}

class PassagemOnibusUrbano extends Passagem {
  constructor(origem: string, destino: string, horaPartida: Date) {
    super(origem, destino, horaPartida);
  }

  public exibirDetalhes(): void {
    console.log(
      `PASSAGEM DE ONIBUS URBANO \nOrigem: ${this.origem} \nDestino: ${this.destino} \nHora Partida: ${this.horaPartida}\n\n`
    );
  }
}

// Fábrica
abstract class Empresa {
  public abstract emitePassagem(
    origem: string,
    destino: string,
    horaPartida: Date
  ): any;
}

// Fábrica Concreta
class EmpresaOnibusInterestadual extends Empresa {
  public emitePassagem(
    origem: string,
    destino: string,
    horaPartida: Date
  ): PassagemOnibusInterestadual {
    return new PassagemOnibusInterestadual(origem, destino, horaPartida);
  }
}

// Fábrica Concreta
class EmpresaOnibusUrbano extends Empresa {
  public emitePassagem(
    origem: string,
    destino: string,
    horaPartida: Date
  ): PassagemOnibusUrbano {
    return new PassagemOnibusUrbano(origem, destino, horaPartida);
  }
}

const viacaoABCLocal = new EmpresaOnibusUrbano();
const viacaoXYZInter = new EmpresaOnibusInterestadual();

viacaoABCLocal
  .emitePassagem("Santo Antonio - Zona Norte", "Boa Vista - Centro", new Date())
  .exibirDetalhes();

viacaoXYZInter
  .emitePassagem("Rio Preto", "Pereira Barreto", new Date())
  .exibirDetalhes();
