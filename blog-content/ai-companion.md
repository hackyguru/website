---
title: "AI Companion for Memory Recording & Friend Matching - ETHGlobal Bangkok"
description: "My hackathon project exploring an AI device that helps record memories and connects people with similar interests"
date: "2024-11-20"
author: "guru"
tags: ["AI", "Web3", "Privacy", "Technical"]
coverImage: "/blog/omiai.png"
---

## my experience at devcon & ETHGlobal Bangkok

Devcon SEA was massive! It was far more overwhelming than any other Web3 event I've attended. During Devcon week, we hosted two successful events: the *Decentralized Data Summit* and *Parallel Societies Congress*.

![Waku @ Devcon](/blog/waku-devcon.jpeg)
![Codex @ Devcon](/blog/codex-devcon.jpeg)

After representing my projects (Codex.storage, Waku.org, and other Logos technologies) at Devcon and its side events, my Bangkok trip culminated at ETHGlobal Bangkok, widely considered the largest Web3 hackathon.

## the inspiration behind our ETHGlobal project

A few months ago, I discovered a Silicon Valley startup called Friend. While their concept initially seemed dystopian, I was intrigued by the idea of recording daily conversations and building a memory-retrieval system. Like many others, my main concern was privacy. The thought of having personal conversations with doctors or loved ones being recorded made me uneasy.

Later at Devcon, I noticed my friend wearing Omi (either a rebranded version of Friend or a similar product). I learned that Omi devices were being offered at the Polygon booth at ETHGlobal for developers. My teammate Sushaan shared my interest in experimenting with Omi, so we visited the Polygon booth together.

## privacy concerns

While Omi is impressive and I'd consider using it daily for memory documentation, privacy remains my primary concern. I'm hesitant to store my conversations in a system without clear privacy guarantees. Though Omi's codebase is open source and largely customizable, it still relies on centralized infrastructure.

My main concerns were:

1. *Storage*: Who can access my data and where is it stored?
2. *Communication*: How is data transferred between the Omi device, phone, and servers?

## addressing privacy

At the hackathon, we aimed to replace the centralized components with Logos technology. Sushaan analyzed Omi's backend (https://github.com/BasedHardware/omi) to help us understand its architecture. We approached the privacy concerns by:

1. *Storage*: Replacing centralized storage with Codex.storage/Storacha.network
2. *Communication*: Switching to Waku.org, a privacy-focused communication network

Both technologies are in early development - Waku is in beta, and Codex recently launched its first testnet. Given Omi's hardware limitations and Codex's requirements, we chose Storacha as a compromise.

## the importance of privacy

Privacy is crucial for this application. The current system transfers conversation data from the Omi device to a phone via Bluetooth, then to Omi's backend for processing. This creates vulnerability to attacks. Using Waku's anonymous communication helps protect user privacy by separating personal data from user identity.

## the social element

While our primary goal was implementing privacy-focused alternatives, we also developed a social feature. We created a system that analyzes conversations to connect users with similar interests. For example, if you frequently discuss football, you might be matched with other football enthusiasts.

We used Phala Network's Redpill endpoints to analyze conversations and create user profiles based on discussion topics and sentiment. When certain topics become prominent in a user's conversations, they're invited to anonymous community chats with like-minded people.

## frencircle

We named our application "Frencircle" (available at https://github.com/issa-me-sush/eth-bangkok-2024). Though built quickly as a minimum viable product, it won first prize in the Storacha track.

## future Plans

I continue to use a customized version of Omi that stores data in my personal database alongside Omi's system. While Frencircle's future is uncertain - it might remain a weekend project or potentially grow with Omi team's support - it successfully demonstrated the integration of privacy-focused technologies like Waku, Codex, and Storacha.

here's a 2 minute video (click on the image to view) that we've made to explain the social aspect  (*we made the video in the last 10 minutes before submission deadline, so we've cut short on alot of features*)

[![pitch video](/blog/frencircle-thumbnail.png)](https://stream.mux.com/CKUHAnE4KDOeGDt17O57rcPrbxXBGOnCOK00qaDrV01v8/high.mp4)

(ignore the eyebags and dark circles - we pulled an all nighter after all the devcon pressure)