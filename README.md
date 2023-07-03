# This repo is deprecated
Refer to [this project](https://github.com/Beatlz/ts-boilerplate) for the new version.

## How to use
`mkdir {project-name}`

`cd {project-name}`

`git clone https://github.com/Beatlz/ts-init.git .`

`npm install`

`tsc`

You must add `require("module-alias/register")` at the top of every file using absolute imports

## NPM commands

`npm start` will execute `ts-node src/index.ts`

## Types folder

To import from types folder, you must add a `/` after the `@`, because the `@types` path is reserved in NodeJS. 

Example: `import MyAwesomeType from "@/types/MyAwesomeType"`

## Adding new folders

1- Add a path in the `paths` property inside the `tsconfig.json` with `"@{folderPath}/*": ["./{folderPath}/*"]`

2- Add a path in the `_moduleAliases` property inside the `package.json` with `"@folderPath": "dist/folderPath/",`
