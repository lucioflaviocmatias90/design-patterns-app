/**
 * Composite Pattern
 *
 * Compor objetos em estruturas de árvores para representar hierarquias
 * partes/todo. Composite permite aos clientes tratarem de maneira uniforme
 * objetos individuais e composições de objetos.
 */

// Component
abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}

  remove(product: ProductComponent): void {}
}

// Leaf
class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, product) => sum + product.getPrice(), 0);
  }
}

// Client Code
const pen = new ProductLeaf("Caneta", 1);
const smartphone = new ProductLeaf("Smartphone", 1_000);
const tShirt = new ProductLeaf("Camiseta", 40);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

const tablet = new ProductLeaf("Tablet", 2_000);
const kindle = new ProductLeaf("Kindle", 300);

const anotherBox = new ProductComposite();
anotherBox.add(tablet, kindle);

productBox.add(anotherBox);

console.log(productBox);
console.log("total de produto", productBox.getPrice());
