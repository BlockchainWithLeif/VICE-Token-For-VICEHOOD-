const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("Vicehood");
    const vicehood = await Token.deploy();
    await vicehood.deployed();

    console.log("Vicehood Token is now Live! Owner address should possess 1 Billion VICE");
    console.log("Deployed to address: ", vicehood.address);
}

main().then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });