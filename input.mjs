import * as readline from "node:readline/promises";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export async function receberInput(msg) {
  let resposta = await input.question(msg);

  while(!resposta) {
    console.log("Resposta inválida!");
    resposta = await input.question(msg);
  }

  return resposta;
}

export function traduzirInputBooleano(input) {
  input = input.toUpperCase();

  switch(input) {
    case 'S': return true;
    case 'N': return false;
    default: return false;
  }
}

export function closeInput() {
  input.close();
}
