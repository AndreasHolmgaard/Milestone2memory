let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let attempts = 0;
var pictures = []

// array of meme to be shuffled

//const memes = new XMLHttpRequest();

const baseURL = "https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/";

function getmemedata(memeData) {

    var memesApi = new XMLHttpRequest();

    memesApi.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const memes = JSON.parse(this.responseText);
            const memeData = memes.data.memes
            initializeimages(memeData)
            addpictures()
            console.log(memes)
            console.log(memeData)
        }
    };
    memesApi.open("GET", baseURL);

    memesApi.send();
}

function initializeimages(memeArray) {
    console.log("pølse")
    for (i in memeArray) {
        pictures[i] = memeArray[i].url
    }
}

getmemedata()

function addpictures() {
    const cards = Array.from(document.querySelectorAll(".card"));

    for (let meme of pictures) {
        const cardAIndex = parseInt(Math.random() * cards.length)
        const cardA = cards[cardAIndex];
        cards.splice(cardAIndex, 1);
        cardA.className += ` ${meme}`
        cardA.style.backgroundImage = "url(" + meme + ")";

        const cardBIndex = parseInt(Math.random() * cards.length)
        const cardB = cards[cardBIndex];
        cards.splice(cardBIndex, 1);
        cardB.className += ` ${meme}`
        cardB.style.backgroundImage = "url(" + meme + ")";
    }
}
// reveal card on click

function onCardClicked(event) {
    const target = event.currentTarget;
    const pairs = Array.from(document.querySelectorAll(".card-meme"));

    if (
        preventClick || target === clickedCard || target.className.includes("match")
    ) {
        return;
    }

    target.className = target.className.replace("hidden", "").trim();
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
            clickedCard.getAttribute("style") !==
            target.getAttribute("style")
        ) {
            preventClick = true;
            setTimeout(() => {

                clickedCard.className = clickedCard.className.replace("match", "").trim() + " hidden";
                target.className = target.className.replace("match", "").trim() + " hidden";
                clickedCard = null;
                preventClick = false;
            }, 500);
        }
        else {
            // keep track of number of combos adn win condition
            combosFound++;
            clickedCard = null;
            if (combosFound * 2 === pairs.length) {
                alert('YOU WIN!');
            }
        }
    }
}