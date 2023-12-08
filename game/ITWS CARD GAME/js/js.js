let cardGroup = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

let totalCards = cardGroup.concat(cardGroup);

function distributeCard () {
    let table = document.querySelector("#table");
    let shuffledCards = deckCards();
    function deckCards() {
        let result;

        result = totalCards.sort(function(){
            return 0.5- Math.
            random();
        });
        return result;
        }

    table.innerHTML = "";

    shuffledCards.forEach (function(element) { 
        let card = document.createElement("div");
    
        card.innerHTML =  
                "<div class='card' data-value= " +
                 element + 
                ">" +
                "<div class= 'card_content'>" +
                element + 
                "</div>" + 
                "</div>";
    
        table.appendChild(card);
    });
}
    
function discover() { 
    let discovery;
    let totalDiscovery = document.querySelectorAll(".discovered");

    if (totalDiscovery.length > 1){
        return;
    }

    this.classList.add("discovered");

    discover = document.querySelectorAll(".discovered");
    if (discovery.length < 2){
        return;
    }

   compare(discovery)
}

    function compare (cardsTocompare){
        if (cardsTocompare[0].dataset.value === cardsTocompare[1].
            dataset.value) {
            success(cardsTocompare)
        } else {
           
        }
    }

    function success (lastCard){
        lastCard.forEach(function(element){
            element.classList.add("successful");
        });
    }

    function error ()
    {
        console.log("error");
    }

distributeCard ();

document.querySelectorAll(".card").forEach(function(element) { 
    element.addEventListener("click", discover);
});

