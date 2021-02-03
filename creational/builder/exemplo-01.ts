/*
  Visão geral do Builder

  - O padrão sugere a separação do código que cria e o código que usa o objeto
  - Trata da criação de objetos complexos (complexos de verdade)
    - Construtores muito complexos
    - Composição de vários objetos (composite)
    - Algoritmo de criação do objeto complexo
  - Permite a criação de um objeto em etapas
  - Permite method chaining
  - É um padrão de projeto complexo
*/

interface MealComposite {
  getPrice(): number;
}

abstract class Meal implements MealComposite {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}

// Arroz
class Rice extends Meal {}
// Feijão
class Beans extends Meal {}
// Carne
class Meat extends Meal {}
// Bebida
class Beverage extends Meal {}
// Sobremesa
class Dessert extends Meal {}

class MealBox implements MealComposite {
  private readonly _children: MealComposite[] = [];

  getPrice() {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealComposite[]) {
    meal.forEach((item) => this._children.push(item));
  }
}

abstract class DishBuilder {
  abstract makeMeal(): this;
  abstract makeBeverage(): this;
  abstract makeDessert(): this;
  abstract getResult(): MealComposite;
}

class MainDishBuilder extends DishBuilder {
  private mealBox: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz Branco", 5);
    const beans = new Beans("Feijão Carioca", 10);
    const meat = new Meat("Peito de Frango", 20);

    this.mealBox.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Coca Cola - 1 litro", 7);
    this.mealBox.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Pudim 200gr", 7);
    this.mealBox.add(dessert);

    return this;
  }

  getResult(): MealComposite {
    return this.mealBox;
  }
}

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
mainDishBuilder.makeDessert();
console.log(mainDishBuilder.getResult());
