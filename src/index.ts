require(`module-alias/register`)

import helloWorld from "@modules/helloWorld";

console.log(helloWorld(`Typescript!`))
console.log(helloWorld())
