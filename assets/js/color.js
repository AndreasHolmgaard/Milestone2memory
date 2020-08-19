let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let attempts = 0;

// array of Colors to be shuffled

const colors = [
    "red",
    "blue",
    "yellow",
    "orange",
    "tan",
    "cyan",
    "pink",
    "purple",
    "magenta",
    "red",
    "gold",
    "peachpuff",
    "brown",
    "greenyellow",
    "white",
    "silver",
    "cornflowerblue",
    "cadetblue",
    "chartreuse",
    "rosybrown",
];

// designate random colors

const cards = Array.from(document.querySelectorAll(".card"));

for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute("data-color", color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute("data-color", color);
}

// reveal card on click

function onCardClicked(e) {
    const target = e.currentTarget;
    const pairs = Array.from(document.querySelectorAll(".card-color"));

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes("match")
    ) {
        return;
    }

    target.className = target.className.replace("hidden-color", "").trim();
    target.className += " match";

    if (!clickedCard) {
        // if we haven't clicked a card yet, display it's color and keep track of the card.
        clickedCard = target;
    } else if (clickedCard) {
        // once two cards are clicked a counter goes up by 1.
        attempts++;
        document.getElementById("counter").innerHTML = "Number of attempts " + attempts;
        // if we have clicked a card , check if it matches the first card.
        if (
            clickedCard.getAttribute("data-color") !==
            target.getAttribute("data-color")
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace("match", "").trim() + " hidden-color";
                target.className =
                    target.className.replace("match", "").trim() + " hidden-color";
                clickedCard = null;
                preventClick = false;
            }, 500);
        } else {
            // keep track of number of combos and win condition
            combosFound++;
            clickedCard = null;
            if (combosFound * 2 === pairs.length) {
                alert("YOU WIN!");
            }
        }
    }
}
