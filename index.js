"use strict";

import Web3 from "web3";

const w3 = new Web3(
  "https://polygon-mainnet.blastapi.io/826583c5-cdb5-47ba-9a25-097442937d43"
);

async function checkSyncing() {
  try {
    const syncing = await w3.eth.isSyncing();

    if (syncing) {
      console.log("Node is syncing. Current status: ", syncing);
    } else {
      console.log("Node is not syncing.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

checkSyncing();

async function getNodeInfo() {
  try {
    const nodeInfo = await w3.eth.getNodeInfo();
    if (nodeInfo) {
      console.log(nodeInfo);
    } else {
      console.log("Cant Fetch the Nodeinfo");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

getNodeInfo();
