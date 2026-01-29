# SUI DAO Voting App

## Intro

I built the **SUI DAO Voting App** to explore how governance should work in a truly decentralized way.

The voting or decision-making systems still depend on centralized servers, private databases, or trusted admins. That means results can be changed, hidden, or controlled behind the scenes. I wanted to build a system where **votes are transparent, permanent, and tamper-proof** by design.

This project is my take on on-chain governance using the Sui blockchain.

---

## Why I Built This

I wanted to understand and demonstrate:

* How DAOs work at a practical level
* How voting logic can live fully on-chain
* How blockchain removes the need for trust in voting systems

As part of this project, **I learned the Move language, wrote custom Sui Move smart contracts, and deployed them myself using the Sui CLI.**

Instead of building a normal voting app with a backend and database, I decided to remove them completely and make it independent of all.

---

## The Problem This Solves

All voting systems:

* Store votes in centralized databases (Can be tempered)
* Require trust in the platform or admins
* Can be modified, deleted, or manipulated
* Are hard to audit publicly

For DAOs and on-chain communities, this breaks the core idea of decentralization.

---

## How the SUI DAO Voting App Works (High Level)

This app runs with **no traditional backend and no database**.

Everything important lives on the Sui blockchain.

Here’s the flow:

1. A user connects their wallet
2. Anyone can create a DAO on-chain
3. Users can join a DAO as members
4. Admins create proposals
5. Members vote on proposals
6. Votes are stored permanently on-chain

Once a vote is submitted, it cannot be changed or removed.

---

## Key Rules in the System

* Anyone can create a DAO by connecting their wallet
* Only DAO admins can create proposals
* Only DAO members can vote
* Each vote is recorded on-chain
* Results are transparent and verifiable by anyone

The blockchain enforces these rules, not the frontend.

---

## What Makes This App Different

* **No database**: No off-chain storage for votes
* **Tamper-proof**: Votes cannot be edited or deleted
* **Transparent**: Anyone can verify voting results
* **Permissionless**: Anyone can create a DAO
* **Trustless**: No central authority controls the system

## Tech Stack Overview

This project is built using:

* **Frontend**: React with TypeScript
* **Styling**: Tailwind CSS and shadcn/ui
* **Blockchain**: Sui
* **Smart Contracts**: Sui Move
* **Wallet Integration**: Sui wallet adapters

The frontend focuses on usability, while the blockchain handles all critical logic.

---

## Who This Project Is For

This project is designed for:

* DAO communities
* Web3 builders
* On-chain governance experiments
* Anyone interested in decentralized decision-making

---

## Conclusion

The SUI DAO Voting App is a practical example of decentralized governance.

No servers to trust.
No data to manipulate.
Just transparent, on-chain voting.
