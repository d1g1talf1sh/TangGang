var TangGangToken = artifacts.require("./TangGangToken.sol");
var TangGangTokenSale = artifacts.require("./TangGangTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(TangGangToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(TangGangTokenSale, TangGangToken.address, tokenPrice);
  });
};
