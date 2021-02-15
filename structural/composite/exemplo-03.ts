// Component
abstract class Employee {
  abstract imprimir(): void;

  add(employee: Employee): void {}
}

// Leaf
class Developer extends Employee {
  constructor(public name: string, public salary: number) {
    super();
  }

  imprimir(): void {
    console.log(`O desenvolver ${this.name} ganha R$ ${this.salary}`);
  }
}

// Composite
class Manager extends Employee {
  private children: Employee[] = [];

  add(...developers: Developer[]): void {
    developers.forEach((dev) => this.children.push(dev));
  }

  imprimir(): void {
    this.children.forEach((child) => child.imprimir());
  }
}

// Client Code
const devPHP = new Developer("PHP", 3_500);
const devNodeJS = new Developer("NodeJs", 5_000);
const devPython = new Developer("Python", 7_000);

const manager = new Manager();
manager.add(devPHP, devNodeJS, devPython);

console.log(manager.imprimir());
