import dotenv from  "dotenv"
import {Web3} from "web3"
import {abi,networks} from  "./build/contracts/MyContract.json";

dotenv.config()
let web3:Web3
web3 = new Web3("http://127.0.0.1:8545")
let ABI:Array<Object> 
let ADDRESS:string 
if(process.argv[2] ==="production"){
    console.log("Esta em producao")
    
}else{
    ABI = abi
    ADDRESS = networks[1691079776213].address
    console.log('modo de desenvolvimento')

}


export default {
    PORT:process.env.PORT || 8080,
    web3
}