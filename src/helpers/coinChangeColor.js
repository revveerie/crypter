export default function coinChangeColor () {
    let change = Number(change);
    let coinChange = document.querySelectorAll('.coin-card__change');
    coinChange.forEach((coinChange) => {
        let coinChangeValue = Number(coinChange.textContent);
        if (coinChangeValue < 0) {
            coinChange.classList.add('change-red');
        }
        else {
            coinChange.classList.add('change-green');
        }
    });
}