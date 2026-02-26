//console.log("Hello Boolean");

console.log(process.argv);
//feat: aggiungo argomenti a process.argv e osservo che restituisce un array con due elementi
/*[
  '/Users/gabrielatumfart/.nvm/versions/node/v24.13.0/bin/node', 0
  '/Users/gabrielatumfart/Documents/boolean/node-hello-world/server.js', 1
   'ciao', 2
   'Boolean' 3
]*/

/*const nome = process.argv[2];

if (nome) {
  console.log("Hello" + " " + nome);
} else {
  console.log("Hello Stregone!");
}*/

const nome = process.argv[2] ? process.argv[2] : "Stregone";
