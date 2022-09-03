const cardDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCard(data.data);
    }
    catch (error) {
        console.log(error);
    }
}


const displayCard = (updateCards) => {
    const cardContainer = document.getElementById('card-container');
    console.log(updateCards);
    updateCards.forEach(cards => {
        const cardDetail = document.createElement('div');
        cardDetail.classList.add('col');
        const author = cards.author;
        cardDetail.innerHTML = `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"></p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDetail);
    });

}
cardDetails();



// for (const cards in updateCards) {
    //     const cardDetail = document.createElement('div');
    //     cardDetail.classList.add('col');
    //     cardDetail.innerHTML = `
    //     <div class="card h-100">
    //         <img src="" class="card-img-top" alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">${cards._id}</h5>
    //             <p class="card-text"></p>
    //         </div>
    //         <div class="card-footer">
    //             <small class="text-muted">Last updated 3 mins ago</small>
    //         </div>
    //     </div>
    //     `;
    //     cardContainer.appendChild(cardDetail);
    //     console.log(cards);
    // }