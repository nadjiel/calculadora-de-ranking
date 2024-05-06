import { receberInput, traduzirInputBooleano, closeInput } from "./input.mjs";

const niveis = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Diamante",
  "Lendário",
  "Imortal"
];

let nome = "";
let xp = 0;
let repetir = false;

function classificar(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  
  if(saldo <= 10) return niveis[0];
  if(saldo <= 20) return niveis[1];
  if(saldo <= 50) return niveis[2];
  if(saldo <= 80) return niveis[3];
  if(saldo <= 90) return niveis[4];
  if(saldo <= 100) return niveis[5];
  
  return niveis[6];
}

async function main() {
  do {
    nome = await receberInput("Qual é o seu nome, herói? 😇 ");

    xp = await receberInput("Quanta experiência você tem? NÃO MINTA PARA MIM! 👿 ");

    console.log(`O Herói de nome ${nome} está no nível de ${classificar(xp)}`);

    console.log("");
    repetir = traduzirInputBooleano(
      await receberInput("Deseja repetir? 🤔 (S/ N) ")
    );
    console.log("");
  } while(repetir);

  closeInput();
};

main();
