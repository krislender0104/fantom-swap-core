const FohmFactory = artifacts.require('FohmFactory');

const feeToSetter = '0x614148e957098Bcab564Aaf2a3Ec4eB7cA4691b2';

module.exports = function(deployer) {
  deployer.deploy(FohmFactory, feeToSetter).then(() => {
    console.log('Fohm Factory is deployed.');
  });
};
