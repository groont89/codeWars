//Define a card suit
function defineSuit(card) {
    return (card[card.length-1] == "♣") ? 'clubs' :
        (card[card.length-1] == "♦") ? 'diamonds' :
        (card[card.length-1] == "♥") ? 'hearts' :
        (card[card.length-1] == "♠") ? 'spades' : 1;

}
console.log(defineSuit('9♦'));