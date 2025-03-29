const { mineCoin } = require('./utils/pytago_algorithm');

const userBandwidth = 50000;
const minedCoins = mineCoin(userBandwidth);

console.log(`Bạn đã khai thác ${minedCoins} Roberhood Coins!`);
