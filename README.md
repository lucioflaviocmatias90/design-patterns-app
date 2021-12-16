# Design Patterns

## Commands

Creating a image
```
docker build -t design-patterns/nodejs .
```

Creating a container
```
docker run -it -d -v $(pwd):/usr/src/app --rm --name design-pattern-app-nodejs design-patterns/nodejs
```

Enter to container
```
docker container exec -it design-patterns-app-nodejs bash
```

Execute a specific file.
Example:
```
yarn tsc ./creational/builder/exemplo-01.ts
node ./creational/builder/exemplo-01.js
```

## Patterns

### Behavior
- Observer

### Creational
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton
### Structural
- Composite


## Links:
- [Padrões de Projetos em Typescript](https://refactoring.guru/pt-br/design-patterns/typescript)
- [Padrões de Projeto (Design Patterns - GoF)](https://www.youtube.com/watch?v=MqddY6Ochkc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)