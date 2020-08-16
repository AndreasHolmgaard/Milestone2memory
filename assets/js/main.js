/* shows the card */
let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
'red', 
'blue',
'yellow',
'orange',
'tan', 
'cyan', 
'pink', 
'purple', 
'magenta', 
'red', 
'gold', 
'black', 
'brown',
'greenyellow',
'white',
'silver',
'cornflowerblue',
'crimson',
'chartreuse',
'rosybrown'
];
 
/* generate random colors */

// for(var i = 0; i < 3; i++)
//   colors.push(Math.floor(Math.random() * 255));

const cards = [document.querySelectorAll(".card-hard")];
for (let color of colors) {
 const cardAIndex = parseInt(Math.random() * cards.length)
 const cardA = cards[cardAIndex];
 cards.splice(cardAIndex, 1);
 cardA.className += ` ${color}`
 cardA.setAttribute("data-color", color);
 
 const cardBIndex = parseInt(Math.random() * cards.length)
 const cardB = cards[cardBIndex];
 cards.splice(cardBIndex, 1);
 cardB.className += ` ${color}`
 cardB.setAttribute("data-color", color); 
 }


function onCardClicked(e) {
    const target = e.currentTarget;
    
if (
    preventClick || 
    target === clickedCard || target.className.includes(" match") 
){
    return;
}

    target.className = target.className
        .replace("hidden", "")
        .trim();
    target.className += " match";

    if (!clickedCard) {
        // if we haven't clicked a card yet, display it's color and keep track of the card.
        clickedCard = target;
        } else if (clickedCard) {
        // if we have clicked a card , check if it matches the first card.
        if (
            clickedCard.getAttribute("data-color") !==
            target.getAttribute("data-color")
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className.replace(" match", "").trim() + "hidden";
                target.className.replace(" match", "").trim() + "hidden";
                clickedCard = null;
                preventClick = false;
            }, 500);
        }
        else { 
        clickedCard = null;
        
    }
}
}


