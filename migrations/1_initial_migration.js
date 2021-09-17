const PepeFactory = artifacts.require('PepeFactory');

const feeToSetter = '0xCb045AC2BB15E4809Fab878b9B0bDDaD99702395';

module.exports = function(deployer) {
  deployer.deploy(PepeFactory, feeToSetter).then(() => {
    console.log('Pepe Factory is deployed.');
  });
};
