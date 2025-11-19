const cardGridElem = document.getElementById("card-grid");
//console.log(cardGridElem);
const overlayElem = document.getElementById("overlay");
//console.log(overlay);
const closeBtnOverlay = document.getElementById("close-btn-overlay");
//console.log(closeBtnOverlay);
const overlayContent = document.querySelector(".overlay-content");
console.log((overlayContent));


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
        //console.log(currentCard);
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
    colElem.addEventListener("click", function () {
        const imgSrc = colElem.querySelector(".card-img").src;
        const title = colElem.querySelector(".card-title").textContent;
        const date = colElem.querySelector(".card-date").textContent;

       
        const overlayContent = document.querySelector(".overlay-content");
        overlayContent.innerHTML = `
            <img src="${imgSrc}" alt="${title}" style="width:100%; border-radius:10px; margin-top:10px;">
            <h3 style="padding:10px; color:gray;">${date}</h3>
            <h2 style="padding:10px;">${title}</h2>
        `;

        
        overlayElem.classList.remove("hidden");
    });

    return colElem;
}


//DAY 2

//overlay functions:


closeBtnOverlay.addEventListener("click", function () {
    overlayElem.classList.add("hidden");
});


// adding display none to the overlay card if any click is done around it, on background
overlayElem.addEventListener("click", function (event) {
    if (event.target === overlayElem) {  
        overlayElem.classList.add("hidden");
    }
});




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






