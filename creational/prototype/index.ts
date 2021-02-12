/**
 * Prototype Pattern
 *
 * Especificar os tipos de objetos a serem criados usando
 * uma instância-protótipo e criar novos objetos pela cópia
 * desse protótipo
 */

const personPrototype = {
  firstName: "Luiz",
  lastName: "Miranda",
  age: 30,

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson);

// shadowling
anotherPerson.firstName = "Maria";

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
