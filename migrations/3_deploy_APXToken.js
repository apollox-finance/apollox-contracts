const APXToken = artifacts.require("./APXToken.sol");

module.exports = async function (deployer, network, accounts) {
    console.log(accounts)
    await deployer.deploy(APXToken);
};
