import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x0eCE0711233b8DfeBdAf5b8DD314BC28C526c564';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}