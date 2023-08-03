const fs = require('fs');
const path = require('path');

const MyContract = artifacts.require("MyContract");
const MyContractClient = artifacts.require("MyContractClient");
module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(MyContract, 888);
  const myContract = await MyContract.deployed();
  await deployer.deploy(MyContractClient,myContract.address)
  const myContractClient = await MyContractClient.deployed()

  // Save the ABI and contract address to the specified TypeScript file
  const contractData = {
    myContract:{
        abi: JSON.stringify(myContract.abi),
        address: myContract.address,

    },
    myContractClient:{
        abi: JSON.stringify(myContractClient.abi),
        address: myContractClient.address,

    }

  };
  const filePath = path.join(__dirname, '..', 'src', 'myContract-abi-address.ts');
  const fileContent = `export const contractData = ${JSON.stringify(contractData, null, 2)};\n`;
  fs.writeFileSync(filePath, fileContent);

  // Other logic or actions you want to perform after deployment
};
