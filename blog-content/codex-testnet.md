---
title: "Improving the Codex Testnet Experience"
description: "Article about how I contributed in making the Codex Developer experience better"
date: "2025-02-23"
author: "guru"
tags: ["Storage", "Web3","Technical"]
coverImage: "/blog/codex-testnet.png"
---

> Disclaimer : The content here is based on my personal opinion and does not represent the collective opinion of any organization.

Codex Storage is the storage component of the [Logos technology stack](https://logos.co/) - a suite of permissionless networks and protocols that can enable developers to build truly decentralized applications. Being a core contributor at [Institute of Free Technology](https://free.technology), my role as the Developer Relations Lead is to advocate some amazing technologies backed by the original web3 ethos (which is long forgotten in a lot of current ecosystems) and improve the developer experience. This article highlights my thought process behind my recent contributions to Codex and could be useful for devrels who are exploring avenues to make a seamless developer / node operator onboarding.

## But, wtf is Codex?

Codex is a Decentralized Storage Network (DSN) which emphasizes on data durability. Although the purpose of Codex could be similar to other existing DSNs like Filecoin/IPFS, Arweave, EthStorage etc., - Codex has a unique approach to solve the data durability problems that exist in the above alternatives. To learn more about Codex, the best material that I would recommend is the [Whitepaper](https://docs.codex.storage/learn/whitepaper).

## Why is Developer/Node operator experience better for Codex?

Projects like Codex can be overwhelming to consume not only for a regular user of the internet but also for seasoned developers. Codex has a very comprehensive architecture that can potentially cause various developer pain points due to various factors like frequent updates, manual configuration requirements, difference in configuration based on the user environments etc.,

Although documenting these in the best way can solve most of the problems, building some tooling can greatly influence a better onboarding experience - that is exactly what this article focuses on articulating.

## Planning the onboarding mechanism

Everything starts as simple napkin drawings with Alice and Bob. Just like the image below :

![Napkin Diagram](/blog/napkin-diagram.png)

Codex has two user groups :
- **Node operators :** Users who provide storage as a service
- **Consumers :** Users who consume storage from node operators for miscellanious needs

In the current state of Codex, both of the user groups are required to run a Codex node in order to interact with the network. And the way to do this is by running multiple commands that differ based on the machine that you are using. To simplify this, I contributed in building the [Codex Installer](https://github.com/codex-storage/codex-installer).

## Codex Installer

[Codex Installer](https://github.com/codex-storage/codex-installer) is a simple way of getting started with Codex. All you have to do is to run the below command on your terminal and the CLI installer will guide you through the process without having to worry about the underlying commands. 

```bash
npx codexstorage
```

You should be able to see the below on your terminal :

![Codex Installer](/blog/codex-installer.png)

Now you are all set. Just go ahead and run the first and second options in the CLI one by one and you should be able to see the Codex node running on your machine. The CLI automatically runs the underlying commands based on the machine you are using (Mac/Linux/Windows).

## Metrics and better troubleshooting

The Codex Installer also voluntarily collects some node information that can aid in improving the developer experience by calculating some node metrics which can be useful to track growth and troubleshoot users who experience issues. A clear disclaimer is provided to the user about the data that is being collected and the user can opt out of data collection by following the manual setup instructions that are available in the [Codex Documentation](https://docs.codex.storage/).

The metrics collected using the Installer are available in the [Metrics dashboard](https://metrics.testnet.codex.storage/). This dashboard is a useful tool for growth teams to track the growth of the testnet. Instead of blindly running a testnet without quantifiable metrics, the metrics dashboard can be used to calculate success from various campaigns.

![Codex Metrics](/blog/codex-metrics.png)

The tail end of the system is a Discord bot the uses the collected metrics to reward 'ALTRUISTIC MODE' role to Altruistic node operators who voluntarily contribute to the testnet. By running the **/node <NODE_ID>** command, the user can get the ALTRUISTIC MODE role. Based on their interaction with the testnet (which includes uploading data, downloading data, and running the node), the user can earn and maintain the 'ACTIVE PARTICIPANT' role. If user stops interacting with the testnet, the role will be automatically changed into 'INACTIVE PARTICIPANT'.

> Note : This has no influence on the node operator rewards. Incentivization is currently work in progress and this article does not promote or mention any information regarding incentivization. Any information regarding incentivization will be communicated through the official channels of Codex and this article is completely based on my personal opinion to promote the 'building in public' culture.

## What's next?

This system is just a starting point and there are a lot of improvements that can be made. Thanks to my amazing co-contributors, we are working on a more intuitive system for crawling the testnet to fetch the metrics without having to do it from the installer.

This article is just a way of sharing my thought process behind the installer to help other projects that are in a similar state of building a better onboarding experience. If you liked this article, please do me a favour and experiement the onboarding process by running the installer. Any feedback from your experience is more than welcome. Join the [Codex Discord](https://discord.gg/codex-storage) to stay tuned for more updates.