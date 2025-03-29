const mineCoin = (userBandwidth) => {
    const miningDifficulty = 10000;
    let minedCoins = userBandwidth / miningDifficulty;
    return minedCoins;
};

module.exports = { mineCoin };
