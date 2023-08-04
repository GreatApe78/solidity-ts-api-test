export const contractData = {
  "myContract": {
    "abi": "[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialValue\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\",\"signature\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"newValue\",\"type\":\"uint256\"}],\"name\":\"ValueChanged\",\"type\":\"event\",\"signature\":\"0x93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59\"},{\"inputs\":[],\"name\":\"value\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true,\"signature\":\"0x3fa4f245\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newValue\",\"type\":\"uint256\"}],\"name\":\"setValue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\",\"signature\":\"0x55241077\"}]",
    "address": "0x9D20086591ECc96696E9125cb1dB75db9693372C"
  },
  "myContractClient": {
    "abi": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_myContractAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\",\"signature\":\"constructor\"},{\"inputs\":[],\"name\":\"getDoubleValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true,\"signature\":\"0x150eb7f3\"}]",
    "address": "0x5AE6294312EF3a1488dc4024bc309e38D5b49969"
  }
};
