let prompt = require("prompt-sync")();
const joke = ["pedra", "papel", "tesoura"];
let playerPoint = 0;
let pcPoint = 0;
let more = 0;
let pc = 0;
let v = 0;
console.log(
  "\nEsse é um game de JOKENPO conhecido popularmente como pedra, papel ou tesoura."
);
console.log("Despensa apresentações, mas irei lembrar das regras: \n");
console.log(`--Pedra vence tesoura--`);
console.log("--Tesoura vence papel--");
console.log("--Papel vence pedra--\n");



do {
  playerPoint = 0;
  pcPoint = 0;
  more = 0;
  v = 0;
  let rounds = +prompt("Mas antes de começar quantos rounds iremos jogar? ");
  while(isNaN(rounds) || rounds <= 0 ){
    rounds = +prompt('Apenas numeros validos: ');
    
  } 
  console.clear();
  // validacao da resposta
  for (; v < rounds; v++) {
    let player = prompt("Faça sua escolha: ").toLowerCase();
    
    while (player != "pedra" && player != "papel" && player != "tesoura") {
      console.log(
        `\nSERIO!???? o jogo é pedra papel ou tesoura você vê ${player} no nome do jogo? Acho que não.`
      );
      player = prompt(
        "Então para de brincadeira e vamos lá ou está com medo de perder? Escolhe: "
      ).toLowerCase();
    }
    console.clear();
    // Aqui iremos dar um valor randomizado
    pc =(Math.random() * (2 - 0)+0).toFixed(0);
    console.log(`\nSua escolha: ${player}.`);
    console.log(`Minha escolha: ${joke[pc]}.\n`);
    // valida a marcacao da pontuacao do player.
    if (
      (player == "tesoura" && joke[pc] == "papel") ||
      (player == "pedra" && joke[pc] == "tesoura") || 
      (player == "papel" && joke[pc] == "pedra")
    ) {
      console.log("Player marca 1 ponto");
      playerPoint++;
      
    } else if (
      //valida a marcacao da pontuacao da maquina.
      (joke[pc] == "tesoura" && player == "papel") ||
      (joke[pc] == "pedra" && player == "tesoura") || 
      (joke[pc] == "papel" && player == "pedra")
    ) {
      console.log("O PC marca 1 ponto");
      pcPoint++;
    } else {
     //verifica se foi empate, caso seja remove 1 da variavel v que valida o for.
      v--;
      console.log("Empate, esse round não valeu");
    }
    console.log('YOU: ' + playerPoint);
    console.log('PC: ' + pcPoint);
    console.log(`Rounds: ${v+1}`);
  }

  if(playerPoint > pcPoint){
    console.log('Parabens voce ganhou');
    console.log('Placar');
    console.log(`Seus pontos: ${playerPoint}`);
    console.log(`Meus pontos: ${pcPoint}`);
  }else if(playerPoint < pcPoint){
    console.log('Eu ganhei, hehe');
    console.log('Placar');
    console.log(`Seus pontos: ${playerPoint}`);
    console.log(`Meus pontos: ${pcPoint}`);
  }else{
    console.log('Placar')
    console.log(`Seus pontos: ${playerPoint}`);
    console.log(`Meus pontos: ${pcPoint}`);
    console.log('Isso é um empate, mas no pedra papel ou tesoura não tem empates. Então temos que jogar novamente.');
  }
  let e = prompt("Jogar novamente? digite sim ou nao: ").toLowerCase();
  console.clear();
  while (e != "sim" && e != "nao") {
    console.log("Apenas sim ou não.");
    e = prompt("Digite sim ou nao: ").toLowerCase();
    console.log(e);
  }
  if (e == "nao") {
    more++;
  }
} while (more == 0);
console.clear();