var cards = [
  { name: '2DePicas',   img: '2DePicas.png' },
  { name: '2DePicas',   img: '2DePicas.png' },
  { name: '3DePicas',   img: '3DePicas.png' },
  { name: '3DePicas',   img: '3DePicas.png' },
  { name: '4DePicas',   img: '4DePicas.png' },
  { name: '4DePicas',   img: '4DePicas.png' },
  { name: '5DePicas',   img: '5DePicas.png' },
  { name: '5DePicas',   img: '5DePicas.png' },
  { name: '6DePicas',   img: '6DePicas.png' },
  { name: '6DePicas',   img: '6DePicas.png' },
  { name: '7DePicas',   img: '7DePicas.png' },
  { name: '7DePicas',   img: '7DePicas.png' },
  { name: '8DePicas',   img: '8DePicas.png' },
  { name: '8DePicas',   img: '8DePicas.png' },
  { name: '9DePicas',   img: '9DePicas.png' },
  { name: '9DePicas',   img: '9DePicas.png' },
  { name: '10DePicas',  img: '10DePicas.png' },
  { name: '10DePicas',  img: '10DePicas.png' },
  { name: 'JDePicas',   img: 'JDePicas.png' },
  { name: 'JDePicas',   img: 'JDePicas.png' },
  { name: 'QDePicas',   img: 'QDePicas.png' },
  { name: 'QDePicas',   img: 'QDePicas.png' },
  { name: 'AsDePicas',  img: 'AsDePicas.png' },
  { name: 'AsDePicas',  img: 'AsDePicas.png' }
];
$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" class="card__' + pic.name + '">';
    html += '<div class="card__back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="card__front">';
    html += '<img style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  // Add all the div's to the HTML
  document.querySelector('.memory-board__inner').innerHTML = html;
  // Bind the click event of each element to a function

$('.card__back').on('click', function () {

    $(this).toggle();
  	$(this).siblings().toggle();

    memoryGame.currentPair.push($(this));

    if (memoryGame.currentPair.length == 2) {
      var res = memoryGame.checkIfPair(memoryGame.currentPair[0],
        memoryGame.currentPair[1]);

      $('.score__pairs-clicked').text(memoryGame.pairsClicked);
      $('.score__pairs-guessed').text(memoryGame.pairsGuessed);

      $('.card__back').addClass('blocked');

      if(!res) {
        setTimeout(function () {
          memoryGame.currentPair[0].toggle();
          memoryGame.currentPair[0].siblings().toggle();
          memoryGame.currentPair[1].toggle();
          memoryGame.currentPair[1].siblings().toggle();
          memoryGame.currentPair = [];
          $('.card__back').removeClass('blocked');
        },1000) }
      else {
          memoryGame.currentPair = [];
          $('.card__back').removeClass('blocked');
        }
      }
      if (memoryGame.finished()) {
      alert('You win');
  }
});

});
