# Defi-protocol
decentralized protocol for apollox derivatives exchange\
Apollox Contracts
docs at https://apollox-finance.gitbook.io/apollox-finance/welcome/apx-token-and-contracts

## Compile smart contract
```bash 
$npm install
$npm install truffle-hdwallet-provider
$npm install -D truffle-plugin-verify@^0.5.4
$truffle compile
```

## Deploy smart contract
```bash 
deploy locally: 
$ganache-cli -d
$truffle migrate --network development
```
