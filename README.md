Creating a image
```
docker build -t design-pattern/nodejs .
```

Creating a container
```
docker run -it -d -v $(pwd):/usr/src/app --rm --name design-pattern-app-nodejs design-pattern/nodejs
```

Enter to container
```
docker container exec -it design-pattern-app-nodejs bash
```

Execute a specific file.
Example:
```
yarn tsc ./creational/builder/exemplo-01.ts
node ./creational/builder/exemplo-01.js
```
