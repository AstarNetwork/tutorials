import { RedspotUserConfig } from "redspot/types";
import "@redspot/patract";
import "@redspot/chai";
import "@redspot/gas-reporter";
import "@redspot/watcher";
import "@redspot/explorer";
import "@redspot/decimals";
require("dotenv").config();

export default {
  defaultNetwork: "development",
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
      accounts: ["//Alice"],
      types: {
        AccountInfo: "AccountInfoWithProviders",
        AuthorityId: "AccountId",
        AuthorityVote: "u32",
        ChallengeGameOf: {
          challenges: "Vec<Hash>",
          createdBlock: "BlockNumber",
          decision: "Decision",
          propertyHash: "Hash",
        },
        Claim: {
          amount: "u128",
          approve: "BTreeSet<AuthorityId>",
          complete: "bool",
          decline: "BTreeSet<AuthorityId>",
          params: "Lockdrop",
        },
        ClaimId: "H256",
        ClaimVote: {
          approve: "bool",
          authority: "u16",
          claim_id: "ClaimId",
        },
        Decision: {
          _enum: ["Undecided", "True", "False"],
        },
        DollarRate: "u128",
        EraIndex: "u32",
        EraStakingPoints: {
          individual: "BTreeMap<AccountId, Balance>",
          total: "Balance",
        },
        Keys: "SessionKeys3",
        Lockdrop: {
          duration: "u64",
          public_key: "[u8; 33]",
          transaction_hash: "H256",
          type: "u8",
          value: "u128",
        },
        Parameters: {
          canBeNominated: "bool",
          optionExpired: "u128",
          optionP: "u32",
        },
        PredicateContractOf: {
          inputs: "Vec<u8>",
          predicateHash: "Hash",
        },
        PredicateHash: "Hash",
        PrefabOvmModule: {
          code: "Vec<u8>",
          scheduleVersion: "u32",
        },
        Property: {
          inputs: "Vec<Vec<u8>>",
          predicateAddress: "AccountId",
        },
        PropertyOf: {
          inputs: "Vec<Vec<u8>>",
          predicateAddress: "AccountId",
        },
        Schedule: {
          putCodePerByteCost: "Weight",
          version: "u32",
        },
        SmartContract: {
          _enum: {
            Wasm: "AccountId",
            Evm: "H160",
          },
        },
        StakingParameters: {
          canBeNominated: "bool",
          optionExpired: "u128",
          optionP: "u32",
        },
        TickerRate: {
          authority: "u16",
          btc: "u128",
          eth: "u128",
        },
        VoteCounts: {
          bad: "u32",
          good: "u32",
        },
      },
    },
    development: {
      endpoint: "ws://127.0.0.1:9944",
      types: {},
      gasLimit: "400000000000",
      explorerUrl:
        "https://polkadot.js.org/apps/#/explorer/query/?rpc=ws://127.0.0.1:9944/",
    },
    substrate: {
      endpoint: "ws://127.0.0.1:9944",
      gasLimit: "400000000000",
      accounts: ["//Alice"],
      types: {},
    },
  },
  mocha: {
    timeout: 60000,
  },
} as RedspotUserConfig;
