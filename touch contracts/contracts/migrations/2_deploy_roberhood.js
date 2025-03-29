const RoberhoodCoin = artifacts.require("RoberhoodCoin");

module.exports = function (deployer) {
  deployer.deploy(RoberhoodCoin, 1000000); // 1 triệu token
};
