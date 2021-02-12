interface Prototype {
  clone(): Prototype;
}

abstract class NotaMusicalPrototype implements Prototype {
  clone(): this {
    const notaMusical = Object.create(this);
    return notaMusical;
  }

  abstract exibir(): void;
}

class Do extends NotaMusicalPrototype {
  exibir() {
    console.log("DO!");
  }
}

class Re extends NotaMusicalPrototype {
  exibir() {
    console.log("RE!");
  }
}

class Mi extends NotaMusicalPrototype {
  exibir() {
    console.log("MI!");
  }
}

class Fa extends NotaMusicalPrototype {
  exibir() {
    console.log("FA!");
  }
}

interface Nota {
  name: string;
  nota: NotaMusicalPrototype;
}

class Partitura {
  private notas: Nota[] = [];

  carregaNotas(): void {
    this.notas.push({ name: "do", nota: new Do() });
    this.notas.push({ name: "re", nota: new Re() });
    this.notas.push({ name: "mi", nota: new Mi() });
    this.notas.push({ name: "fa", nota: new Fa() });
  }

  getNota(name: string): NotaMusicalPrototype | undefined {
    const nota = this.notas.find((nota: Nota) => nota.name === name);

    return nota?.nota.clone();
  }
}

const partitura = new Partitura();

partitura.carregaNotas();
partitura.getNota("do")?.exibir();
partitura.getNota("re")?.exibir();
partitura.getNota("mi")?.exibir();
partitura.getNota("fa")?.exibir();
partitura.getNota("fa")?.exibir();
