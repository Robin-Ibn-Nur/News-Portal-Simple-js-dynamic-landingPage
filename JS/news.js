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
        const navBar = document.createElement('div');
        navBar.classList.add('col');
        navBar.innerHTML = `
        <button href="" onclick="categoryId('${news.category_id}')">${news.category_name}</button>
        `;
        navContainer.appendChild(navBar);
    });

    // console.log(updateNews);
}


const categoryId = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${_id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
// document.getElementById('nav-container').addEventListener('click', function () {
//     const cardContainer = document.getElementById('card-container');
//     console.log(cardContainer);
// })
// datas.sort((a, b) => {
//     return b.propertyName - a.propertyName;
// });