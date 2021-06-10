import { patract, network } from "redspot";
require("dotenv").config();

const { getContractFactory } = patract;
const { createSigner, keyring, api } = network;

const uri: string = process.env.MNEMONIC!;

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
