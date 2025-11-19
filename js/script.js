const cardGridElem = document.getElementById("card-grid");
//console.log(cardGridElem);
const overlayElem = document.getElementById("overlay");
//console.log(overlay);
const closeBtnOverlay = document.getElementById("close-btn-overlay");
console.log(closeBtnOverlay);


//CREATE ELEMENT
axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const cardsArray = resp.data;
        //console.log(cardsArray);

        printCard(cardsArray);
    })



function printCard(cardsArray) {
    cardsArray.forEach((currentCard) => {

        const cardElem = createCard(currentCard);
        cardGridElem.append(cardElem);
    });

}


function createCard(currentCard) {
    const colElem = document.createElement("div");
    colElem.classList.add("col");

    colElem.innerHTML =
        `  
                <div class="card">
                    <img class="card-img" src="${currentCard.url}" alt="">
                    <h3 class="card-date">${currentCard.date}</h3>
                    <h2 class="card-title">${currentCard.title}</h2>
                </div>
            `;
    // colElem.addEventListener("click", function () {
    //     showOverlay();
    // });

    return colElem;
}




//TEMPLATE LITERAL


// axios
//     .get("https://lanciweb.github.io/demo/api/pictures/")
//     .then((resp) => {
//         const cardsArray = resp.data;
//         console.log(cardsArray);

//         let cardString = "";
//         cardsArray.forEach((card) => {
//             cardString +=
//             `  
//                 <div class="col">
//                     <div class="card">
//                         <img class="card-img" src="${card.url}" alt="">
//                         <h3 class="card-date">${card.date}</h3>
//                         <h2 class="card-title">${card.title}</h2>
//                     </div>
//                 </div>
//             `
//         });
//         cardGridElem.innerHTML = cardString;
//     })


//DAY 2

// overlay functions:

// function showOverlay() {
//     overlayElem.classList.remove("hidden");

// }
// function hideOverlay() {
//     overlayElem.classList.add("hidden");

// }

// closeBtnOverlay.addEventListener("click", function () {
//     hideOverlay();
// })