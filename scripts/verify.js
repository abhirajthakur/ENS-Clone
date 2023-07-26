const { run, ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x1B39C28506594271F65701baECd4e0e7E3470161";
  console.log("Verifying contract with deployer:", deployer.address);

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: ["buddy"],
    });
  } catch (err) {
    if (err.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(err);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
