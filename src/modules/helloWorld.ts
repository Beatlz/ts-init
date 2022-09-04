const helloWorld = (name = ``): string => {
  return name ? `Hello ${name}` : `Hello world!`
}

export default helloWorld
