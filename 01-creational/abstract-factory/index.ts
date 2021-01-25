abstract class Cadeira {
  abstract exibirDetalhes(): void;
}

abstract class Sofa {
  abstract exibirDetalhes(): void;
}

class CadeiraModerna extends Cadeira {
  public exibirDetalhes(): void {
    console.log("Eu sou uma cadeira moderna");
  }
}

class SofaModerno extends Sofa {
  public exibirDetalhes(): void {
    console.log("Eu sou um sofá moderno");
  }
}

class CadeiraRustica extends Cadeira {
  public exibirDetalhes(): void {
    console.log("Eu sou uma cadeira rustica");
  }
}

class SofaRustico extends Sofa {
  public exibirDetalhes(): void {
    console.log("Eu sou um sofa rustico");
  }
}

interface MoveisFactory {
  criarCadeira(): Cadeira;

  criarSofa(): Sofa;
}

class MoveisModernoFactory implements MoveisFactory {
  public criarCadeira() {
    return new CadeiraModerna();
  }

  public criarSofa() {
    return new SofaModerno();
  }
}

class MoveisRusticoFactory implements MoveisFactory {
  public criarCadeira() {
    return new CadeiraRustica();
  }

  public criarSofa() {
    return new SofaRustico();
  }
}

const mobiliaModerna = new MoveisModernoFactory();
mobiliaModerna.criarCadeira().exibirDetalhes();
mobiliaModerna.criarSofa().exibirDetalhes();

console.log("-----------------------------");

const mobiliaRustica = new MoveisRusticoFactory();
mobiliaRustica.criarCadeira().exibirDetalhes();
mobiliaRustica.criarSofa().exibirDetalhes();
