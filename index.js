const bitcoin = require("bitcoinjs-lib");
const ec = require("elliptic").ec;
const sha256 = require('js-sha256');
const ripemd160 = require('ripemd160');
const base58 = require('bs58');
const fetch = require("node-fetch");
const bip39 = require('bip39');
const bip32 = require('bip32');
const bech32 = require('bech32');
const secp256k1 = require('secp256k1');
const crypto = require('crypto');


let Terra = {};


// Generate the key and address
Terra.generateAddressAndKey = (bipPath="m/44'/330'/0'/0/0") => {
     

    const mKey = Terra.createPrivateMnemonicKey()
    console.log(mKey)
    const addressInfo = Terra.createWalletAddress(mKey, bipPath);
    return addressInfo;

}


// Generate the key and address
Terra.createWalletAddress = (mnemonic, bipPath="m/44'/330'/0'/0/0") => {
     if (typeof mnemonic !== "string") {
        throw new Error("mnemonic expects a string")
    }

    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(bipPath);
    const words = bech32.toWords(child.identifier);
    const address= bech32.encode("terra", words);

    return {"mnemonicKey": mnemonic , "address": address, "path":bipPath};

}

// Create the private key 
Terra.createPrivateMnemonicKey = () => {
    var Mnemonic = require('poliscore-mnemonic');
    var mnemonic = new Mnemonic(Mnemonic.Words.English).toString() + " "+ new Mnemonic(Mnemonic.Words.English).toString();
    return mnemonic;
}


module.exports = Terra;