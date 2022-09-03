const cardDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCard(data.data[0].author);
    }
    catch (error) {
        console.log(error);
    }
}
cardDetails();

const displayCard = (card) => {
    console.log(card);
}