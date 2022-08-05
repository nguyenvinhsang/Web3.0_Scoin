require('@nomiclabs/hardhat-waffle');
module.exports = {
  defaultNetwork: "rinkeby",
  solidity: "0.8.9",
  networks:{
    rinkeby:{
      url: "https://eth-rinkeby.alchemyapi.io/v2/NF4lG2KQMcAxNFUFeUA9_fTvIBkr-Yiz",
      accounts: ['310f8405a35f04b22fcdc5acfc2c2678fa23c6f2f5b4aaa8a181974b5a389ccc']
    }
  }
};
