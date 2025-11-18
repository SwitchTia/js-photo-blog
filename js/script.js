const cardGridElem = document.getElementById("card-grid")
//console.log(cardGridElem);


axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const cardsArray = resp.data;
        console.log(cardsArray);

        let cardString = "";
        cardsArray.forEach((card) => {
            cardString +=
            `  
                <div class="col">
                    <div class="card">
                        <img class="card-img" src="${card.url}" alt="">
                        <h3 class="card-date">${card.date}</h3>
                        <h2 class="card-title">${card.title}</h2>
                    </div>
                </div>
            `
        });
        cardGridElem.innerHTML = cardString;
    })