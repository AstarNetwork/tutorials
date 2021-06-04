/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.1",

  networks: {
    //Dusty
    dusty: {
      url: "http://localhost:9933",
      chainid: 80,
      accounts: [
        "0x60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883",
      ],
    },
  },
};
