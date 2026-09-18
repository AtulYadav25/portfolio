# PiePack Exchange

**A full-stack real-time spot trading exchange, built to understand how platforms like Binance actually work under the hood.**

## Why I Built This

One question kept bugging me.

What actually happens behind the scenes when I place a trade on an exchange?

I couldn't shake it. So I decided to build one myself.

I started with the fundamentals from Harkirat's Zerodha Trading Algorithm course:
- Order books
- Liquidity
- Limit and market orders
- OCO orders

Then I went deeper into the infrastructure side. TimescaleDB. Kafka. WebSockets. Matching engines. Order execution.

Learning each piece felt manageable. The real challenge showed up when I tried connecting them into one working system.

Blog posts weren't enough for that part. So I just started building and figured it out along the way, discussing architecture with Claude to understand the orchestration and the "why" behind every decision.

I kept asking myself questions closer to how a senior engineer would think:
- Is this scalable?
- What are the best practices here?
- What security risks and edge cases am I missing?

Along the way I learned why real exchanges reach for Rust, C++ or Go for their performance-critical parts. My goal was never to compete with Binance. It was to understand the architecture and feed my own curiosity.

Bit by bit it came together, and that's how PiePack Exchange happened.

## What It Does

PiePack Exchange is a paper-trading spot exchange with three markets: **BTC-USDC**, **ETH-USDC** and **SOL-USDC**. Every new user gets seeded balances so they can start trading right away.

- Live price ticks, order book depth and recent trades stream over **WebSocket**
- Orders get validated, funds get locked and everything matches **in-memory** through a price-time-priority order book
- **Stop-loss and take-profit** orders run through a Trigger Engine using OCO logic
- Every fill, cancel and balance change flows through **Kafka** and lands in **TimescaleDB**
- A standalone **TradeBot** plays market maker, firing orders every 500–1200ms to keep the book alive

## How It's Built

- **Backend:** Fastify 5 and TypeScript, with JWT auth, Zod validation and rate limiting
- **Matching engine:** A custom in-memory setup — `ExchangeEngine` feeding into `MarketEngine`, `OrderBook`, `TriggerEngine` and `BalanceEngine`
- **Event streaming:** Kafka in KRaft mode, with a batch consumer writing everything to the database
- **Data layer:** PostgreSQL with Prisma for users and balances, TimescaleDB for trades and candle data
- **Real-time layer:** A WebSocket gateway pushing price ticks, order book updates, trades and notifications
- **Frontend:** React 19, Vite and Tailwind CSS, with shadcn/ui, TradingView's lightweight-charts and TanStack Query
- **TradeBot:** A separate Node.js process that simulates real market activity

## What I Learned

Building this taught me more than any tutorial could have.

I learned how to design an event-driven system around Kafka, and how to keep an in-memory engine consistent while persisting state asynchronously in the background. I saw why time-series databases like TimescaleDB exist in the first place, and got a real feel for the complexity behind balance locking, OCO logic and race conditions in order matching.

Most of all, I understood what "production-grade" actually means for financial infrastructure, and why speed-critical systems reach for languages like Rust, C++ or Go.

---

**Tech stack:** Fastify · TypeScript · React 19 · Kafka · TimescaleDB · PostgreSQL · Prisma · WebSockets · Zod · Tailwind CSS

**Repo:** [github.com/AtulYadav25/piepack-exchange](https://github.com/AtulYadav25/piepack-exchange)