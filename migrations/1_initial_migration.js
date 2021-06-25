const WagyuFactory = artifacts.require('WagyuFactory');

const feeToSetter = '0x96D95da6a07954BB494ED587f38756c4f99De472';

module.exports = function(deployer) {
  deployer.deploy(WagyuFactory, feeToSetter).then(() => {
    console.log('Wagyu Factory is deployed.');
  });
  // deployer.deploy(WVLX).then(() => {
  //   console.log('WVLX Token is deployed.');
  // });
};
