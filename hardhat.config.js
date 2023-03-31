require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "YOUR RPC URL";
const NEXT_PUBLIC_PRIVATE_KEY = "PRIVATE KEY";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};