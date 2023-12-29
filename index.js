// import { ethers } from "./ethers-5.6.esm.min.js";
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
connectButton.onclick = connect;
fundButton.onclick = fund;

const connect = async () => {
  if (typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected";
    console.log("accout connected");
  } else {
    console.log("there no meta mask");
    document.getElementById("connectButton").innerHTML = "install meta mask";
  }
};

const fund = async () => {
  if (typeof window.ethereum !== "undefined") {
  }
};
