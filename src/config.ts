import dotenv from 'dotenv';
import { Contract, ContractAbi, Web3 } from 'web3';
import { contractData } from './myContract-abi-address';



dotenv.config();
let web3: Web3;
web3 = new Web3(process.env.FANTOM_TESTNET_RPC);
let ABI: ContractAbi;
let ADDRESS: string;
let myContractInstance: Contract<ContractAbi>;



ABI = JSON.parse(contractData.myContract.abi);

ADDRESS = contractData.myContract.address

myContractInstance = new web3.eth.Contract(ABI, ADDRESS);


export default {
	PORT: process.env.PORT || 8080,
	web3: web3,
	myContractInstance: myContractInstance,
};
