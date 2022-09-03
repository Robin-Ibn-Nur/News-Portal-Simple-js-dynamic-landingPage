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
    const navContainer = document.getElementById('nav-container');

    updateNews.forEach(news => {
        const navBar = document.createElement('a');
        navBar.classList.add('col');
        navBar.innerHTML = `

        <a href="" onclick="cardDetails('${news.category_name}')">${news.category_name}</a>
        `;
        navContainer.appendChild(navBar);
    });

    // console.log(updateNews);
}

// document.getElementById('nav-container').addEventListener('click', function () {
//     const cardContainer = document.getElementById('card-container');
//     console.log(cardContainer);
// })
// datas.sort((a, b) => {
//     return b.propertyName - a.propertyName;
// });