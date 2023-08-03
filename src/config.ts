import dotenv from 'dotenv';
import { Contract, ContractAbi, Web3 } from 'web3';
import { contractData } from './myContract-abi-address';



dotenv.config();
let web3: Web3;
web3 = new Web3(process.env.FANTOM_TESTNET_RPC);


let myContractInstance: Contract<ContractAbi>;
let myContractClientInstance:Contract<ContractAbi>;


const MY_CONTRACT_ABI = JSON.parse(contractData.myContract.abi);

const MY_CONTRACT_ADDRESS = contractData.myContract.address
const MY_CONTRACT_CLIENT_ABI = JSON.parse(contractData.myContractClient.abi)
const MY_CONTRACT_CLIENT_ADDRESS = contractData.myContractClient.address
myContractInstance = new web3.eth.Contract(MY_CONTRACT_ABI,MY_CONTRACT_ADDRESS );
myContractClientInstance = new web3.eth.Contract(MY_CONTRACT_CLIENT_ABI,MY_CONTRACT_CLIENT_ADDRESS);


export default {
	PORT: process.env.PORT || 8080,
	web3: web3,
	myContractInstance: myContractInstance,
	myContractClientInstance:myContractClientInstance
};
