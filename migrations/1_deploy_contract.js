const MyContract = artifacts.require("MyContract")



module.exports = async (deployer,network,accounts) =>{
    await deployer.deploy(MyContract,888)
    const myContract = await MyContract.deployed()
    let currentValue = await myContract.value()
    //console.log(currentValue.toString())

}