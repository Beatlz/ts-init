## How to use
`mkdir {project-name}`

`cd {project-name}`

`git clone https://github.com/Beatlz/ts-init.git .`

`npm install`

## NPM commands

`npm start` will execute `ts-node src/index.ts`

## Types folder

To import from types folder, you must add a `/` after the `@`, because the `@types` path is reserved in NodeJS. 

Example: `import MyAwesomeType from "@/types/MyAwesomeType"`
