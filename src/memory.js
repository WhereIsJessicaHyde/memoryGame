// var MemoryGame = function (cards) {
//   this.cards = cards;
// };
var MemoryGame = function (cards) {
 this.cards = cards;
 this.pickedCards = [];
 this.pairsClicked = [];
 this.pairsGuessed = [];
};
/* he utilizado el algoritmo para repartir cartas de Fisher-Yates
basicamente consiste en cambiar la posicion de dos elementos del
array, dejando fuera del ciclo al ultimo elemento en cada iteracción.
la variable temp, almacena el primer valor de cardsArr[], para
poder modificar el segundo valor */
MemoryGame.prototype.shuffleCard = function (cardsArr) {
var i,
    j,
    temp;
for (i = cardsArr.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  temp = cardsArr[i];
  cardsArr[i] = cardsArr[j];
  cardsArr[j] = temp;
}
return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  pairsClicked += 1;

  if (firstCard == secondCard) {
    pairsGuessed += 1;
    return true
  }
}

MemoryGame.prototype.finished = function () {
if (pairsGuessed == 12) {
  return alert("has ganado")
}
 };
