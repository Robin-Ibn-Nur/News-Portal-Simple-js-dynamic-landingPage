const loadNewsManu = () => {

    const url = (`https://openapi.programming-hero.com/api/news/categories`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMenuData(data.data.news_category))
        .catch(console.error())
}

const displayMenuData = menubar => {
    const navContainer = document.getElementById('nav-container');
    menubar.forEach(Categorie => {
        console.log(Categorie);
        const categorieslist = document.createElement('ul');
        categorieslist.classList.add('navbar')
        categorieslist.innerHTML = `
                 <div>   
                      <button onclick="dataLoad(${Categorie.category_id})" class="navbar-brand  btn" href="#">${Categorie.category_name}</button>
                </div>
            
            `;
        navContainer.appendChild(categorieslist)
    });

}
loadNewsManu()

const dataLoad = (showNews) => {
    console.log(showNews);
}



const loadNewsCategories = (category_id) => {
    const url = (`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsCategories(data.data))
}

const displayNewsCategories = SeeNews => {
    // console.log(allNewses);
    const noFoundMass = document.getElementById('no-found-mass')

    if (SeeNews.length === 0) {
        noFoundMass.classList.remove('d-none')
    }
    else {
        noFoundMass.classList.add('d-none')
    }
    const newsDisplay = document.getElementById('news-Display');
    SeeNews.forEach(News => {
        // console.log(News);

        const newsCardInfo = document.createElement('div');
        newsCardInfo.classList.add('row')
        newsCardInfo.innerHTML = `
        

            <div class="col-md-3  ">
                <img src="${News.thumbnail_url}" class=" rounded-start" alt="...">
              </div>
              <div class="col-md-9 border">
                <div class="card-body mt-3">
                  <h5 class="card-title">${News.title}</h5>
                  <p class="card-text">${News.details.slice(0, 200)}...</p>
                  <br>
                 <div class="d-flex  justify-content-around">  
                  <div class="d-flex pe-5 ">
                  <img src="${News.author.img}}" class=" rounded pe-2" alt="" width="40" height="34">
                  <h6 class="pt-1"> ${News.author.name} </h6> 
                  </div>
                  <div class="d-flex  ps-5">
                    <p class="fs-4" ><i  class="fa-sharp fa-solid fa-eye" ></i> </p>
                    <h6 class="ps-2 pt-2"> ${News.total_view ? News.total_view : 'No Views'} </h6> 
                  </div>
                  <div class="ps-5 ms-5"> <button onclick="loadNewsDetails('${News._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsShowModal">
                       Show Details
                    </button></div>
                  </div>
                  
                 </div>
                  
            </div>
       
        
        `
        newsDisplay.appendChild(newsCardInfo);

    });

}
loadNewsCategories('02')
toggleSpinner(true);
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none')
    }
}
const loadNewsDetails = async news_id => {
    const url = (`https://openapi.programming-hero.com/api/news/${news_id}`)
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}
const displayNewsDetails = news => {
    console.log(news, news[0].total_view);
    const modalTital = document.getElementById('newsShowModalLabel')
    modalTital.innerText = news[0].title;
    const modalBody = document.getElementById('modelbody')
    modalBody.innerHTML = `
  <p> News Views: ${news[0].total_view ? news[0].total_view : 'No Views'} </p>
  <p> Author Name: ${news[0].author.name ? news[0].author.name : 'No Views'} </p>`
}
toggleSpinner(true);