import { network, patract } from "redspot";

const { getContractFactory } = patract;
const { addPair, getSigners, keyring, api } = network;

async function run() {
  await api.isReady;

  // The redspot signer supports passing in an address. If you want to use  substrate uri, you can do it like this:
  // const signer = addPair(keyring.createFromUri((process.env as any).MNEMONIC));
  // Or get the configured account from redspot config:
  const signer = (await getSigners())[0];

  const contractFactory = await getContractFactory("erc20", signer.address);

  const balance = await api.query.system.account(signer.address);

  console.log("Balance: ", balance.toHuman());

  // The `deploy` method will attempt to deploy a new contract.
  // The `deployed` method will first find out if the same contract already exists based on the parameters.
  // If the contract exists, it will be returned, otherwise a new contract will be created.
  const contract = await contractFactory.deploy("new", "1000000", {
    gasLimit: "400000000000",
    value: "100000 UNIT",
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
