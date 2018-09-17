var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('.memory-board').innerHTML = html;
  // Bind the click event of each element to a function

$('.back').on('click', function () {
    $(this).toggle();
  	$(this).siblings().toggle();

    memoryGame.currentPair.push($(this));

    if (memoryGame.currentPair.length == 2) {
      var res = memoryGame.checkIfPair(memoryGame.currentPair[0],
        memoryGame.currentPair[1]);

      $('.score__pairs-clicked').text(memoryGame.pairsClicked);
      $('.score__pairs-guessed').text(memoryGame.pairsGuessed);

      $('.back').addClass('blocked');

      if(!res) {
        setTimeout(function () {
          memoryGame.currentPair[0].toggle();
          memoryGame.currentPair[0].siblings().toggle();
          memoryGame.currentPair[1].toggle();
          memoryGame.currentPair[1].siblings().toggle();
          memoryGame.currentPair = [];
          $('.back').removeClass('blocked');
        },1000) }
      else {
          memoryGame.currentPair = [];
          $('.back').removeClass('blocked');
        }
      }
      if (memoryGame.finished()) {
      alert('You win');
  }
});

});
