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


const displayNews = (updateNews) => {
    console.log(updateNews);
    toggleSpinner(true);
    const navContainer = document.getElementById('nav-container');
    updateNews.forEach(news => {
        const navBar = document.createElement('l');
        navBar.classList.add('col');
        navBar.innerHTML = `
        <button class="text-center px-5" href="" onclick="categoryId('${news.category_id}')">${news.category_name}</button>
        `;
        navContainer.appendChild(navBar);
    });

}
loadNews();

const categoryId = async category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = res.json();
    console.log(data)
}
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
            <button onclick="newsDetails('${cards.author.name}') type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#DetailsModel">Show Details</button>
        </div>
        `;
        cardContainer.appendChild(cardDetail);

    });
    toggleSpinner(false);
}

const newsDetails = modal => {
    const modalTitle = document.getElementById('DetailsModelLabel');
    modalTitle.innerText = modal.author.name;

}
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none')
    }
}

cardDetails();