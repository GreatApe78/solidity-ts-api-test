
const MyContract = artifacts.require("MyContract")


contract("MyContract",async(accounts)=>{
    let contractInstance
    beforeEach("Should get the contract instance",async()=>{
        contractInstance = await MyContract.deployed()
    })

    it("Should Check if the Number is 888",async()=>{
        const expectedValue = 888
        let currentValue = await contractInstance.value()
        currentValue = Number(currentValue)
        assert(currentValue===expectedValue,"Numbers do not match")
    })

})