// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "ollie", "Aki"]

function writeCards(names, event) {
    return names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!` )
}

function countDown (number){
    
    while (number >= 0){
        console.log(number);
        number--
    }
}
