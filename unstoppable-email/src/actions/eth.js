import Web3 from 'web3';
import abi from './../ABI';

export function getContract() {
    const contract_address = "0x1b7114e1671e1b889f6f78887dcb3e878139668a";
    const web3 = new Web3(window.web3.currentProvider);
    const email = web3.eth.contract(abi);
    const contract = email.at(contract_address, (err, result) => {
        
    });

    return contract;
}

export function getAccounts(){
    const web3 = new Web3(window.web3.currentProvider);
    return web3.eth.accounts;
}