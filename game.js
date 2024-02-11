document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const cardColors = colors.concat(colors).sort(() => 0.5 - Math.random());
  
  let flippedCards = [];
  let canClick = true;

  function flipCard(card) {
    if (canClick && !card.classList.contains('matched') && flippedCards.length < 2) {
      card.style.backgroundColor = card.dataset.color;
      card.classList.add('flipped');
      flippedCards.push(card);
      
      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }
  }

  function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    canClick = false;

    if (firstCard.dataset.color === secondCard.dataset.color) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetFlippedCards();
    } else {
      setTimeout(() => {
        firstCard.style.backgroundColor = '';
        secondCard.style.backgroundColor = '';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetFlippedCards();
      }, 1000);
    }
  }

  function resetFlippedCards() {
    flippedCards = [];
    canClick = true;
  }

  for (let i = 0; i < cardColors.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = cardColors[i];
    gameBoard.appendChild(card);

    card.addEventListener('click', function() {
      flipCard(this);
    });
  }
});
