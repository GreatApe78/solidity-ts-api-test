import dotenv from 'dotenv';
import { Contract, ContractAbi, Web3 } from 'web3';
//const {Web3} = require("wbe3")
import { abi, networks } from './build/contracts/MyContract.json';

dotenv.config();
let web3: Web3;
web3 = new Web3('http://127.0.0.1:8545');
let ABI: ContractAbi;
let ADDRESS: string;
let myContractInstance: Contract<ContractAbi>;



ABI = abi;

ADDRESS = networks[1691079776213].address;

myContractInstance = new web3.eth.Contract(ABI, ADDRESS);


export default {
	PORT: process.env.PORT || 8080,
	web3: web3,
	myContractInstance: myContractInstance,
};
