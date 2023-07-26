const { ethers } = require("hardhat");
const { abi, contractAddress } = require("../constants");

async function main() {
  //   const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // const [signer] = await ethers.getSigners();
  const signer = ethers.getSigner();
  const domains = new ethers.Contract(contractAddress, abi, signer);
  const zoroDomainPrice = await domains.price("zoro");
  const luffyDomainPrice = await domains.price("luffy");

  const registerZoroTx = await domains.register("Zoro", {
    value: zoroDomainPrice,
  });
  await registerZoroTx.wait();

  const registerLuffyTx = await domains.register("Luffy", {
    value: luffyDomainPrice,
  });
  await registerLuffyTx.wait();

  console.log("Mint Successful");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
