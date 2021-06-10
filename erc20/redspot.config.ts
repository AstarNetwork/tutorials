import { RedspotUserConfig } from "redspot/types";
import '@redspot/patract';
import '@redspot/chai';
import '@redspot/gas-reporter';
import '@redspot/watcher';
import '@redspot/explorer';
import '@redspot/decimals';
require("dotenv").config();

export default {
  defaultNetwork: "dusty",
  contract: {
    ink: {
      toolchain: "nightly",
      sources: ["contracts/**/*"],
    },
  },
  networks: {
    dusty: {
      endpoint: "ws://127.0.0.1:9944",
      gasLimit: "400000000000",
      types: {
        AccountInfo: 'AccountInfoWithProviders'
      },
    },
    development: {
      endpoint: "ws://127.0.0.1:9944",
      types: {},
      gasLimit: "400000000000",
    },
  },
  mocha: {
    timeout: 60000,
  },
} as RedspotUserConfig;
