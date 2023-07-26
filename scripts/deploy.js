const { ethers } = require("hardhat");

const tld = "buddy";

async function main() {
  const domains = await ethers.deployContract("Domains", [tld]);
  await domains.waitForDeployment();

  console.log(`Domains deployed to: ${domains.target}`);
}

// 0x1B39C28506594271F65701baECd4e0e7E3470161
// https://mumbai.polygonscan.com/address/0x1B39C28506594271F65701baECd4e0e7E3470161#code

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
