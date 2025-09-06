# 💰 Donation Box dApp (Algorand + TypeScript)

A simple **Donation Box** smart contract built on the **Algorand blockchain** using [TealScript](https://github.com/algorandfoundation/tealscript).
This project is designed as a beginner-friendly way to learn Algorand smart contracts and global state management.

---

## 📖 Project Description
The **donation box** smart contract enables anyone to send Algos to a shared pool.
It keeps track of the **total donated amount** on the Algorand blockchain, ensuring full transparency and immutability.

---

## 🚀 What it does
- Accepts **Algo donations** from any user.
- Updates the global state with the **total donations received**.
- Provides a function to **check the total balance**.

---

## ✨ Features
- 🔒 **Secure:** Donations are recorded on Algorand’s tamper-proof blockchain.
- 📊 **Transparent:** Anyone can check the global donation total.
- 🛠 **Beginner-Friendly:** Simple and readable TypeScript smart contract.
- 🌍 **Decentralized:** Open to all Algorand users.

---

## 📜 Smart Contract Code

```ts
import { Contract, GlobalState, uint64, Txn } from "@algorandfoundation/tealscript";

export class DonationBox extends Contract {

  // Global state to store total donations
  totalDonations = GlobalState<uint64>({ key: "total", initialValue: 0n });

  // Function: Donate Algo
  donate(): string {
    this.totalDonations.value = this.totalDonations.value + Txn.amount;
    return "Thanks for donating! 🙏";
  }

  // Function: Check balance
  checkTotal(): uint64 {
    return this.totalDonations.value;
  }
}
