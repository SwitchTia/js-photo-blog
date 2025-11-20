// DOM elements
const cardGridElem = document.getElementById("card-grid");
//console.log(cardGridElem);
const overlayElem = document.getElementById("overlay");
//console.log(overlay);
const closeBtnOverlay = document.getElementById("close-btn-overlay");
//console.log(closeBtnOverlay);
const overlayContent = document.querySelector(".overlay-content");
//console.log((overlayContent));


// Global variable to store the active card
let activeCard = null;
let cardsArray = []; 


// Getting the card data:
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(resp => {
        cardsArray = resp.data; 
        console.log(cardsArray);
        printCards(cardsArray);
    });


// Function that prints all cards:
function printCards(cardsArray) {
    cardsArray.forEach((cardData, index) => {
        const cardElem = createCard(cardData, index);
        cardGridElem.append(cardElem);
    });
}


// Function that create a single card element:
function createCard(currentCard) {
    const colElem = document.createElement("div");
    colElem.classList.add("col");

    colElem.innerHTML = `
        <div class="card">
            <img class="pin" src="./img/pin.svg" alt="pin">
            <img class="card-img" src="${currentCard.url}" alt="Image of blog activities">
            <h3 class="card-date">${currentCard.date}</h3>
            <h2 class="card-title">${currentCard.title}</h2>
        </div>
    `;

    // On click event sets this card as active and shows overlay:
    colElem.addEventListener("click", () => {
        activeCard = currentCard;      
        fillOverlay(activeCard);   
        showOverlay();
    });

    return colElem;
}


// DAY 2

// OVERLAY:

// Funtion that fills the overlay with the active card data:
function fillOverlay(currentCard) {
    overlayContent.innerHTML = `
        <img class="card-img" src="${currentCard.url}" alt="Image of blog activities">
        <h3 class="card-date">${currentCard.date}</h3>
        <h2 class="card-title">${currentCard.title}</h2>
    `;
}

// Function to show the overlaid card:
function showOverlay() {
    overlayElem.classList.remove("hidden");
}

// On click on the X btn the overlayed card dissapears (display-none):
closeBtnOverlay.addEventListener("click", function () {
    overlayElem.classList.add("hidden");
});


// Adding display none to the overlay card if any click is done around it, on background:
overlayElem.addEventListener("click", function (event) {
    if (event.target === overlayElem) {  
        overlayElem.classList.add("hidden");
    }
});






// const cardGridElem = document.getElementById("card-grid");
// //console.log(cardGridElem);
// const overlayElem = document.getElementById("overlay");
// //console.log(overlay);
// const closeBtnOverlay = document.getElementById("close-btn-overlay");
// //console.log(closeBtnOverlay);
// const overlayContent = document.querySelector(".overlay-content");
// //console.log((overlayContent));


// //CREATE ELEMENT

// axios
//     .get("https://lanciweb.github.io/demo/api/pictures/")
//     .then((resp) => {
//         const cardsArray = resp.data;
//         //console.log(cardsArray);

//         printCard(cardsArray);
//     })


// //Function print card
// function printCard(cardsArray) {
//     cardsArray.forEach((currentCard) => {

//         const cardElem = createCard(currentCard);
//         //console.log(currentCard);
//         cardGridElem.append(cardElem);
//     });

// }

// //Function create card
// function createCard(currentCard) {
//     const colElem = document.createElement("div");
//     colElem.classList.add("col");

//     colElem.innerHTML =
//         `  
//                  <div class="card">
//                     <img class="pin" src="./img/pin.svg" alt="pin">
//                     <img class="card-img" src="${currentCard.url}" alt="Image of blog activities">
//                     <h3 class="card-date">${currentCard.date}</h3>
//                     <h2 class="card-title">${currentCard.title}</h2>
//                 </div>
//             `;
//     colElem.addEventListener("click", function () {
//         fillOverlay(colElem);
//         showOverlay();
//     });

//     return colElem;
// }


// //DAY 2

// //OVERLAY:

// //Function fill overlay with active card info
// function fillOverlay(cardElem) {
//     const imgSrc = cardElem.querySelector(".card-img").src;
//     const title = cardElem.querySelector(".card-title").textContent;
//     const date = cardElem.querySelector(".card-date").textContent;

//     const overlayContent = document.querySelector(".overlay-content");
//     overlayContent.innerHTML = `
       
//                     <img class="card-img" src="${imgSrc}" alt="Image of blog activities">
//                     <h3 class="card-date">${date}</h3>
//                     <h2 class="card-title">${title}</h2>
             
//     `;
// }


// //Function to show the overlaid card
// function showOverlay() {
//     overlayElem.classList.remove("hidden");
// }

// //On click the overlayed card dissapears (display-none)
// closeBtnOverlay.addEventListener("click", function () {
//     overlayElem.classList.add("hidden");
// });


// //Adding display none to the overlay card if any click is done around it, on background
// overlayElem.addEventListener("click", function (event) {
//     if (event.target === overlayElem) {  
//         overlayElem.classList.add("hidden");
//     }
// });




// //TEMPLATE LITERAL


// // axios
// //     .get("https://lanciweb.github.io/demo/api/pictures/")
// //     .then((resp) => {
// //         const cardsArray = resp.data;
// //         console.log(cardsArray);

// //         let cardString = "";
// //         cardsArray.forEach((card) => {
// //             cardString +=
// //             `  
// //                 <div class="col">
// //                     <div class="card">
// //                         <img class="card-img" src="${card.url}" alt="">
// //                         <h3 class="card-date">${card.date}</h3>
// //                         <h2 class="card-title">${card.title}</h2>
// //                     </div>
// //                 </div>
// //             `
// //         });
// //         cardGridElem.innerHTML = cardString;
// //     })






