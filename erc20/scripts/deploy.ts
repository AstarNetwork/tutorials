import { patract, network } from "redspot";

const { getContractFactory } = patract;
const { createSigner, keyring, api } = network;
const { extendEnvironment } = require("redspot/config");
import { WsProvider } from "@polkadot/api";
import type { RegistryTypes } from "@polkadot/types/types";
import typeDefs from "@plasm/types";
import { ApiPromise } from "redspot/types";

const { ApiPromise } = require("@polkadot/api");

extendEnvironment((rse) => {
  const provider = new WsProvider("ws://127.0.0.1:9944");
  const types = typeDefs.dustyDefinitions;
  const api = new ApiPromise({
    provider,
    types: {
      ...(types as RegistryTypes),
    },
  });
  rse.api = api;
});

const uri =
  "bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice";

async function run() {
  await api.isReady;

  const signer = createSigner(keyring.createFromUri(uri));
  const contractFactory = await getContractFactory("erc20", signer);

  const balance = await api.query.system.account(signer.address);

  console.log("Balance: ", balance.toHuman());

  const contract = await contractFactory.deployed("new", "1000000", {
    gasLimit: "200000000000",
    value: "100000000000",
  });

  console.log("");
  console.log(
    "Deploy successfully. The contract address: ",
    contract.address.toString()
  );

  api.disconnect();
}

run().catch((err) => {
  console.log(err);
});
