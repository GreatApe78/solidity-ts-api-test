import dotenv from 'dotenv';
import { Contract, ContractAbi, Web3 } from 'web3';
import { contractData } from './myContract-abi-address';
dotenv.config();






const networkConfig = {
	goerli: {
	  id: 5,
	  rpcUrl: process.env.GOERLI_RPC || "https://rpc.ankr.com/eth_goerli",
	},
	fantomTestnet: {
	  id: 4002,
	  rpcUrl:
		process.env.FANTOM_TESTNET_RPC || "https://rpc.testnet.fantom.network/",
	},
	ganacheGUI: {
	  id: 5777,
	  rpcUrl: process.env.GANACHE_GUI_RPC || "http://127.0.0.1:7545",
	},
	polygonMumbaiTestnet: {
	  rpcUrl:process.env.POLYGON_MUMBAI_TESTNET_RPC || "https://endpoints.omniatech.io/v1/matic/mumbai/public",
	  id: 80001,
	},
  };
  

const selectedNetwork = networkConfig[process.argv[2]]



let web3: Web3;
web3 = new Web3(selectedNetwork.rpcUrl);


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
