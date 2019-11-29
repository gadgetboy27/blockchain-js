const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('979e4da93cf9429e172a94359581be239979f5d85dbd238c499930f14c525d50')
const myWalletAddress = myKey.getPublic('hex')

const gadgetCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
gadgetCoin.addTransaction(tx1)

console.log('\n Starting the miner...')
gadgetCoin.minePendingTransactions(myWalletAddress)

console.log('\n Balance of Gadgetboy is', gadgetCoin.getBalanceOfAddress(myWalletAddress))
