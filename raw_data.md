

HEDERA DETAILS:


$ npx hardhat run scripts/do-ops.js --network hedera_testnet
Deployer: 0xe3D2976D80B5Dc6491037953af49D8a8ACDe3ebb
Deploying MyToken (MyTokenX / MTX) with deployer 0xe3D2976D80B5Dc6491037953af49D8a8ACDe3ebb
MyToken deployed at: 0x5DE34E3529fb0B036b6fB8f7A1D2f83A3f19BeCb
Minted 5000 tokens to 0xe3D2976D80B5Dc6491037953af49D8a8ACDe3ebb — tx: 0x8d789c2c478d8ef42b5aea1f199d5830d40b59f38a3b6f67fdcf54e1a22b1bec
Granted MINTER_ROLE to 0x23ce01731d2dF1ADD75AFc29CD2440f945204b82 — tx: 0x819d452f40503ad8db4deef69f0b39d10ee053a4c0e0a61c6da05702fbac85bd
Transferred 10 tokens to 0x97E9E5082E44c9e618aAD746280c2EB702f28bE3 — tx: 0xdee21596c853d7bb0f89a518477bad7fa4ad13cd35495d0aa9898f1d5c84addb
✅ Script finished successfully









% another time





$ npx hardhat run scripts/deploy.js --network hedera_testnet
Deploying with: 0xe3D2976D80B5Dc6491037953af49D8a8ACDe3ebb
ProviderError: [Request ID: d3aff0d3-aa36-435d-93ef-cbf77023fc95] Mirror node upstream failure: statusCode=504, message=timeout of 30000ms exceeded
    at HttpProvider.request (/var/www/html/alltrenders/HederaGenesis/smart_contracts/node_modules/hardhat/src/internal/core/providers/http.ts:116:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at AutomaticGasPriceProvider._suggestEip1559FeePriceValues (/var/www/html/alltrenders/HederaGenesis/smart_contracts/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:232:22)
    at AutomaticGasPriceProvider.request (/var/www/html/alltrenders/HederaGenesis/smart_contracts/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:173:34)
    at EthersProviderWrapper.send (/var/www/html/alltrenders/HederaGenesis/smart_contracts/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
kenyor@HP-EliteBook-830-G5-a7a50787:/var/www/html/alltrenders/HederaGenesis/smart_contracts$ npx hardhat run scripts/deploy.js --network hedera_testnet
Deploying with: 0xcB00fB1Bc16F9e5fEB3bB817d8C4D456d60Aa58C
Factory deployed: 0x59A2F68F62A04A94E16F889C37c89804895FC124
Router deployed: 0x9eC7a42F3f69680d5C8E9817fDA41B9025038d4E
Pair created: 0x3D20aFDA3e07596fff8471F1De9Aa6dE4a9e44e7

✅ Deployment complete. Save these:
FACTORY_ADDRESS = 0x59A2F68F62A04A94E16F889C37c89804895FC124
ROUTER_ADDRESS  = 0x9eC7a42F3f69680d5C8E9817fDA41B9025038d4E
PAIR_ADDRESS    = 0x3D20aFDA3e07596fff8471F1De9Aa6dE4a9e44e7
kenyor@HP-EliteBook-830-G5-a7a50787:/var/www/html/alltrenders/HederaGenesis/smart_contracts$ npx hardhat run scripts/deploy.js --network hedera_testnet
Deploying with: 0xcB00fB1Bc16F9e5fEB3bB817d8C4D456d60Aa58C
Factory deployed: 0xf0a21805a0Be4164783bDa5b2133F32506291C87
Router deployed: 0x12A95F99C7fE2451F8c623462D56389ABA67A66F
Pair created: 0x4822e853776aBb2EabaEBD7ef4fe54D6FbE9E177

✅ Deployment complete. Save these:
FACTORY_ADDRESS = 0xf0a21805a0Be4164783bDa5b2133F32506291C87
ROUTER_ADDRESS  = 0x12A95F99C7fE2451F8c623462D56389ABA67A66F
PAIR_ADDRESS    = 0x4822e853776aBb2EabaEBD7ef4fe54D6FbE9E177
kenyor@HP-EliteBook-830-G5-a7a50787:/var/www/html/alltrenders/HederaGenesis/smart_contracts$ npx hardhat run scripts/interact.js --network hedera_testnet
Using account: 0xcB00fB1Bc16F9e5fEB3bB817d8C4D456d60Aa58C
Pair: 0x0000000000000000000000000000000000000000

🔹 Token A: GamerX (GX) @ 0x0420b7272B146816851de0A3Df10F957ea282197
🔹 Token B: United States Standard Dollar (USSD) @ 0x65ad6C756ED11Ff84ACF9eDa8B5891F945aecD1F

Approving router for liquidity...
^Z
[1]+  Stopped                 npx hardhat run scripts/interact.js --network hedera_testnet
kenyor@HP-EliteBook-830-G5-a7a50787:/var/www/html/alltrenders/HederaGenesis/smart_contracts$ npx hardhat run scripts/interact.js --network hedera_testnet
Using account: 0xcB00fB1Bc16F9e5fEB3bB817d8C4D456d60Aa58C
Pair: 0x4822e853776aBb2EabaEBD7ef4fe54D6FbE9E177

🔹 Token A: GamerX (GX) @ 0x0420b7272B146816851de0A3Df10F957ea282197
🔹 Token B: United States Standard Dollar (USSD) @ 0x65ad6C756ED11Ff84ACF9eDa8B5891F945aecD1F

Approving router for liquidity...
Adding liquidity...
✅ Liquidity added: 100000.0 GX + 100.0 USSD
📊 Current Price: 1 GX = 0.001 USSD
📊 Current Price: 1 USSD = 1000 GX
✅ Swapped 10 GX → USSD
📊 New Price after swap: 1 GX = 0.0009998003299061086 USSD
✅ Liquidity removed via Router
kenyor@HP-EliteBook-830-G5-a7a50787:/var/www/html/alltrenders/HederaGenesis/smart_contracts$ npx hardhat run scripts/deploy.js --network hedera_testnet
Deploying with: 0xcB00fB1Bc16F9e5fEB3bB817d8C4D456d60Aa58C
Factory deployed: 0x1Af55156DA7B7097d13690665b784dAD98c8364c
Router deployed: 0xE6BC76407f09AD18A8d21451d6401bBc6b030ee0
Pair created: 0x386D7A8f5754248C8eBbb785F53B43265239ff36

✅ Deployment complete. Save these:
FACTORY_ADDRESS = 0x1Af55156DA7B7097d13690665b784dAD98c8364c
ROUTER_ADDRESS  = 0xE6BC76407f09AD18A8d21451d6401bBc6b030ee0
PAIR_ADDRESS    = 0x386D7A8f5754248C8eBbb785F53B43265239ff36