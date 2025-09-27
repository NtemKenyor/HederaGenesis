# Hedera Genesis

**A go-to tool for everything on Hedera**  
The all-in-one DeFi, tooling, and infrastructure portal for the Hedera network — built to simplify token creation, liquidity management, swaps, on/off-ramping, analytics, and debugging, all in one seamless interface.

🔗 Live Demo: [roynek.com/HederaGenesis](https://roynek.com/HederaGenesis/)  
📂 Repository: [github.com/NtemKenyor/HederaGenesis](https://github.com/NtemKenyor/HederaGenesis)  
🎥 Demo Video: [Watch on YouTube](https://youtu.be/j05K5rpywSA)  

---

## 🎬 Project Demo

[![Hedera Genesis Demo Video](https://img.youtube.com/vi/j05K5rpywSA/maxresdefault.jpg)](https://youtu.be/j05K5rpywSA)

---

## 🚀 What Is Hedera Genesis?

Hedera Genesis is a unified portal that brings together essential DeFi and developer tooling on the Hedera blockchain. It bridges the gap between users, liquidity providers, and builders by offering:

- **Token lifecycle management**: create, mint, assign metadata, and control roles  
- **Automated Market Maker (AMM)**: add liquidity, remove liquidity, create token pairs, and perform token swaps  
- **Ramp (on/off-ramp) integration**: acquire or cash out tokens through integrated mechanisms  
- **Pool & analytics dashboard**: view TVL, reserves, 24h volume, LP stats, and contract addresses  
- **Developer & debug tools**: transaction logs, network info, contract endpoints, wallet diagnostics  

It’s designed to be modular, transparent, and ready for both testnet experimentation and mainnet deployment.

---

## 📦 Architecture & Structure

Here’s a high-level look at how the project is organized:

```

/
├── api/                ← Backend APIs & server logic (if any)
├── assets/             ← Frontend assets: images, styles, etc.
├── smart_contracts/    ← Solidity / Hedera EVM contract code (factory, router, pair, etc.)
├── index.html          ← Main frontend entry point
├── dex.html            ← DEX / swap interface
├── ramp.html           ← Ramp interface
├── pairs.html          ← Pool / pair listing interface
├── debug.html           ← Debug & developer console interface
├── token_builder.html  ← Token creation and management UI
├── raw_data.md         ← Raw on-chain or reference data
├── TEST.md             ← Test plans, scenarios, or instructions
├── CONTRIBUTING.md     ← Guidelines for contributors
└── LICENSE              ← MIT license

````

Each frontend HTML file is typically paired with JavaScript logic (either inline or in separate `.js` files) to drive the interaction with smart contracts and APIs.

---

## 📌 Getting Started

### Prerequisites

- Node.js & npm (if you run a local dev server or bundler)  
- Hedera Testnet / Mainnet access (RPC endpoint, credentials)  
- A Hedera-compatible EVM wallet (e.g. MetaMask)  

### Local Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/NtemKenyor/HederaGenesis.git
   cd HederaGenesis````

2. **Install dependencies** *(if you have a build step)*

   ```bash
   npm install
   ```

3. **Configure environment / credentials**
   Create a `.env` file (or equivalent) with your Hedera network configuration, private keys, RPC endpoints, contract addresses, etc.

4. **Deploy smart contracts** (optional)
   In `smart_contracts/`, compile and deploy your Factory, Router, Pair contracts to the target network (testnet or mainnet). Save the deployed addresses in your frontend config.

5. **Serve frontend locally**

   ```bash
   just open index.html - this is the entry point
   ```

6. **Connect wallet & interact**
   Open in browser, connect your MetaMask (or other EVM wallet), and begin creating/minting tokens, adding liquidity, swaps, and debugging.

---

## 🛠 Features & Workflow

Here are the key flows you can perform:

### Token Management

* Deploy new token (name, symbol, initial mint)
* Mint tokens to addresses
* Grant or revoke roles (minter, burner)
* Set metadata / registry URI
* Import and manage existing token contracts

### Liquidity & AMM

* Create a new token pair (Token A / Token B)
* Add liquidity to an existing pair
* Remove liquidity
* Perform token swaps with real-time pricing

### Ramp Integration

* On-ramp: acquire tokens via integrated purchase mechanism
* Off-ramp: cash out tokens via built-in exit

### Analytics & Debug Tools

* Pool stats: reserves, TVL, 24h volume, LP shares
* Contract references: factory, router, pair addresses
* Debug console: view transaction logs, chain state, gas, block numbers
* Wallet diagnostics & network info

---

## ✅ Contribution

We welcome contributions, enhancements, and community feedback.
Please see **CONTRIBUTING.md** for our code of conduct, pull request guidelines, and how to set up your dev environment.

---

## 🎯 Future Roadmap (Ideas & Vision)

* Governance module for token holders
* Yield farming & staking integration
* Cross-chain bridge support
* Advanced analytics (historical charts, trends)
* Mobile-friendly UI / responsive design
* Plugin architecture for third-party feature injection

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## ✉️ Contact & Acknowledgments

* Created by the Hedera Genesis team / NtemKenyor
* If you like this project, please ⭐ star it
* Questions, feedback, or collaboration? Open an issue or reach out via GitHub

Let’s build the future of DeFi on Hedera together! 🌱

