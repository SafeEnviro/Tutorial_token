const SafeMath = artifacts.require("SafeMath");
const Tutorial_token = artifacts.require("Tutorial_token");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Tutorial_token);
};
