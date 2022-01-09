export default function coinChangeColorP () {
    let value = document.querySelector('.coin-card__change').textContent;
    let change = Number(value);
    let coinChange = document.querySelector('.coin-card__change');
        if (change < 0) {
            if (coinChange.classList.contains('change-green')) {
                coinChange.classList.remove('change-green');
                coinChange.classList.add('change-red');
            }
            else
                coinChange.classList.add('change-red');
        }
        else {
            if (coinChange.classList.contains('change-red')) {
                coinChange.classList.remove('change-red');
                coinChange.classList.add('change-green');
            }
            else
                coinChange.classList.add('change-green');
        }
}