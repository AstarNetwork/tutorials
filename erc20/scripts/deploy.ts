import { patract, network } from "redspot";
require("dotenv").config();

const { getContractFactory } = patract;
const { api } = network;

const signer = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"; // Alice Address

async function run() {
  await api.isReady;

  const contractFactory = await getContractFactory("erc20", signer);

  const balance = await api.query.system.account(signer);
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
