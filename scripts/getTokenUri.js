const { ethers } = require("hardhat");
const { abi, contractAddress } = require("../constants");

async function main() {
  //   const contractAddress = "";
  //   const signer = ethers.getSigner();
  const [signer] = await ethers.getSigners();
  const domains = new ethers.Contract(contractAddress, abi, signer);

  const tokenURI = await domains.tokenURI(1);
  console.log(`Token URI: ${tokenURI}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
