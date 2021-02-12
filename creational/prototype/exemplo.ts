interface Prototype {
  clone(): Prototype;
}

class UserPrototype implements Prototype {
  constructor(private name: string, private age: number) {}

  clone(): this {
    const clonedUser = Object.create(this);
    return clonedUser;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

const user = new UserPrototype("Jonathan", 45);
const anotherUser = user.clone();

console.log(user.getName() === anotherUser.getName());

console.log(anotherUser instanceof UserPrototype);

console.log(user);
console.log(anotherUser);
