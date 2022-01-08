export default function dropdown() {
    let exchangeCards = document.querySelectorAll('.exchange-card__wrap');
    for( let i = 0; i < exchangeCards.length; i++){
        exchangeCards[i].addEventListener("click", function() {
            let description = exchangeCards[i].querySelector('.exchange__description');
            description.classList.toggle('open');
        });
    }
}