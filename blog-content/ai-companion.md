---
title: "AI Companion for Memory Recording & Friend Matching - ETHGlobal Bangkok"
description: "My hackathon project exploring an AI device that helps record memories and connects people with similar interests"
date: "2024-11-20"
author: "guru"
tags: ["AI", "Web3", "Privacy", "Technical"]
coverImage: "/blog/omiai.png"
---

## my experience at devcon & ETHGlobal Bangkok

Devcon SEA was massive! It was far more overwhelming than any other Web3 event I've attended. During Devcon week, we hosted two successful events: the [Decentralized Data Summit](https://lu.ma/ysjjjaxa?tk=0JC7b6) and [Parallel Societies Congress](https://lu.ma/psc1?tk=E0M5Nc). I was able to meet a lot of other cypherpunks in the Ethereum ecosystem and learn about about a lot of cool projects that are in the works.

![Codex @ Devcon](/blog/codex-devcon.jpeg)
![Waku @ Devcon](/blog/waku-devcon.jpeg)

After representing my projects [Codex.storage](https://codex.storage), [Waku](https://waku.org), and other [Logos](https://logos.co) technologies at Devcon and its side events, the climax of my Bangkok trip was at ETHGlobal Bangkok, probably the largest of all the Web3 hackathons till date.

## the inspiration behind our ETHGlobal project

A few months ago, I discovered a Silicon Valley startup called Friend. While their concept initially seemed dystopian, I was intrigued by the idea of recording daily conversations and building a memory-retrieval system. Like many others, my main concern was privacy. The thought of having personal conversations with doctors or loved ones being recorded made me uneasy. But overall, Friend is a great idea. Imagine your grandkids being able to query about your life when you're gone (except all the stuff from Bangkok you'd rather they didn't know).

Later at Devcon, I noticed my friend wearing Omi (either a rebranded version of Friend or a similar product). I learned that Omi devices were being offered at the Polygon booth at ETHGlobal for developers. My teammate Sushaan shared my interest in experimenting with Omi, so we visited the Polygon booth together.

## privacy concerns

While Omi is impressive and I'd consider using it daily for memory documentation, privacy remains my primary concern. I'm hesitant to store my conversations in a system without clear privacy guarantees. Though Omi's codebase is open source and largely customizable, it still relies on centralized infrastructure.

## some technical observations

In the perspective of minimizing the data risks, local edge node computation is the most ideal solution. But the current state of AI models makes it infeasible. For a $50 device, the computational power is definitely not enough to run a local LLM. The only solution is to relay the data to a server, where the data is stored and processed. The server is not just a single point of failure but also proposes a risk of data interception as the user does not have control over the data.

This is where I wanted to plug in Waku's capability of running in resource restricted environments. Waku's peer to peer communication is a great fit for this scenario as it brings in network level anonymity out of the box. And, it worked pretty well for a MVP. Waku could be middleware between the Omi device and the backend server and this way we decouple the identity of the user from the data.

My main concerns were:

1. *Storage*: Who can access my data and where is it stored?
2. *Communication*: How is data transferred between the Omi device, phone, and servers?

## addressing privacy

At the hackathon, we aimed to replace the centralized components with Logos technology. Sushaan analyzed Omi's backend (https://github.com/BasedHardware/omi) to help us understand its architecture. We approached the privacy concerns by:

1. *Storage*: Replacing centralized storage with Codex.storage/Storacha.network
2. *Communication*: Switching from pure-HTTP webhooks to Waku.org, a privacy-focused communication network

Both technologies are in early development - Waku is in beta, and Codex recently launched its first testnet. Given Omi's hardware limitations and Codex's requirements, we chose Storacha as a compromise.

## the importance of privacy

Privacy is crucial for this application. The current system transfers conversation data from the Omi device to a phone via Bluetooth, then to Omi's backend for processing. This creates vulnerability to attacks. Using Waku's anonymous communication helps protect user privacy by separating personal data from user identity.

## the social element

While our primary goal was implementing privacy-focused alternatives, we also developed a social feature. We created a system that analyzes conversations to connect users with similar interests. For example, if you frequently discuss football, you might be matched with other football enthusiasts.

We used Phala Network's Redpill endpoints to analyze conversations and create user profiles based on discussion topics and sentiment. When certain topics become prominent in a user's conversations, they're invited to anonymous community chats with like-minded people.

## frencircle

We named our application "Frencircle" (available at https://github.com/issa-me-sush/eth-bangkok-2024). Though built quickly as a minimum viable product, it won first prize in the Storacha track.

## future plans

I continue to use a customized version of Omi that stores data in my personal database alongside Omi's system. While Frencircle's future is uncertain - it might remain a weekend project or potentially grow with Omi team's support - i would love to experiment more with integration of privacy-focused technologies like Waku, Codex, and Storacha.

here's a 2 minute video (click on the image to view) that we've made to explain the social aspect  (*we made the video in the last 10 minutes before submission deadline, so we've cut short on alot of features*)

[![pitch video](/blog/frencircle-thumbnail.png)](https://stream.mux.com/CKUHAnE4KDOeGDt17O57rcPrbxXBGOnCOK00qaDrV01v8/high.mp4)

(ignore the eyebags and dark circles - we pulled an all nighter after all the devcon pressure)