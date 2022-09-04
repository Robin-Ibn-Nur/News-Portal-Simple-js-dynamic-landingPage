const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}
loadNews();

const displayNews = (updateNews) => {
    toggleSpinner(true);
    const navContainer = document.getElementById('nav-container');
    updateNews.forEach(news => {
        const navBar = document.createElement('a');
        navBar.classList.add('col');
        navBar.innerHTML = `
        <a class="text-decoration-none" href="" onclick="categoryId('${news.category_id}')">${news.category_name}</a>
        `;
        navContainer.appendChild(navBar);
    });

}

const cardDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
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
        // const author = cards.author;
        cardDetail.innerHTML = `
        <div class="card h-100 p-4">
            <img src="${cards.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cards.title}</h5>
                <p class="card-text">${cards.details.slice(0, 200)}...</p>
            </div>
            <div class="card-footer h-25 d-flex justify-content-between ">
                <div class="d-flex">
                    <span><img class="img-fluid h-25 rounded-pill" src="${cards.author.img}" alt=""></span>
                    <p>${cards.author.name}</p>
                </div>
                <div>
                    <p>${cards.total_view}M</p>
                </div>
            </div>
            <button onclick="newsDetails('${cards.category_id}') type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#DetailsModel">Show Details</button>
        </div>
        `;
        cardContainer.appendChild(cardDetail);
    });
    toggleSpinner(false);
}

const newsDetails = async categoryId => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none')
    }
}
toggleSpinner(false);
cardDetails();