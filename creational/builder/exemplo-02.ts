abstract class Sanduiche {
  abrePao(): void {
    console.log("Abrindo o pão");
  }

  abstract insereIngredientes(): void;

  fechaPao(): void {
    console.log("Fechando o pão");
  }
}

class HamburgerSanduiche extends Sanduiche {
  insereIngredientes() {
    console.log("Inserindo carne e queijo");
  }
}

class FishSanduiche extends Sanduiche {
  insereIngredientes() {
    console.log("Inserindo peixe e tomate seco");
  }
}

interface SanduicheBuilder {
  abrePao(): this;
  insereIngredientes(): this;
  fechaPao(): this;
  getSanduiche(): Sanduiche;
}

class HamburguerSanduicheBuilder implements SanduicheBuilder {
  private hamburgherSanduiche: HamburgerSanduiche = new HamburgerSanduiche();

  abrePao(): this {
    this.hamburgherSanduiche.abrePao();
    return this;
  }

  insereIngredientes(): this {
    this.hamburgherSanduiche.insereIngredientes();
    return this;
  }

  fechaPao(): this {
    this.hamburgherSanduiche.fechaPao();
    return this;
  }

  getSanduiche(): Sanduiche {
    console.log("Lanche está pronto");
    return this.hamburgherSanduiche;
  }
}

class FishSanduicheBuilder implements SanduicheBuilder {
  private fishSanduiche: FishSanduiche = new FishSanduiche();

  abrePao(): this {
    this.fishSanduiche.abrePao();
    return this;
  }

  insereIngredientes(): this {
    this.fishSanduiche.insereIngredientes();
    return this;
  }

  fechaPao(): this {
    this.fishSanduiche.fechaPao();
    return this;
  }

  getSanduiche(): Sanduiche {
    console.log("Lanche está pronto");
    return this.fishSanduiche;
  }
}

class Cozinha {
  fazSanduiche(builder: SanduicheBuilder) {
    builder.abrePao();
    builder.insereIngredientes();
    builder.fechaPao();
    builder.getSanduiche();
  }
}

const builder1 = new HamburguerSanduicheBuilder();
const builder2 = new FishSanduicheBuilder();

const cozinha = new Cozinha();

cozinha.fazSanduiche(builder1);

console.log("------------------------------");

cozinha.fazSanduiche(builder2);

console.log("------------------------------");

builder1.abrePao().fechaPao().getSanduiche();
