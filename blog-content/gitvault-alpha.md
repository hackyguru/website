---
title: "GitVault Alpha - Defend your code base from censorship"
description: "My hackathon project exploring an AI device that helps record memories and connects people with similar interests"
date: "2024-11-20"
author: "guru"
tags: ["AI", "Web3", "Privacy", "Technical"]
coverImage: "/blog/gitvault-blog.png"
---

# Code Censorship is not normal

GitHub is the most widely used code hosting platform in the world. GitHub is a centralised service and is vulnerable to censorship due to regulatory pressure from various entities. Some of you might think that censorship is not a big deal, but it is. It is very common for projects in the privacy and decentralisation realm to be censored and most of the teams who are building critical infrastructure in this space have manual backups of their codebase in GitLab or Bitbucket to ensure that they still have access to their codebases in case of censorship.

Still think this is not a big deal? Here is what happened to the co-founder of GitHub, himeself :

![Github Censorship](/blog/github-censorship.png)


## Web3 is a joke without a decentralised version control

90% of the codebases in Web3 are hosted on GitHub. The same organizations that talk about decentralising the internet are depending on a centralized service to host their codebases and this is a shame. But there is a genuine reason for this - developer experience and awareness.

We've seen that [Radicle](https://radicle.xyz/) has been able to make a dent in the market by providing a decentralised alternative to GitHub. I love Radicle and I wish they were more popular... But it is still a niche product and it is not for everyone. Web3 is still early and it is hard to convince everyone to move to a decentralised alternative. **It becomes incredibly hard for projects to have visibility in the developer community if they are not on GitHub and hence, they are forced to host their codebases on GitHub.**

## How GitVault solves this

GitVault is not an alternative to GitHub but instead an infrastructure that can be used alongside GitHub to ensure that your codebases are safe from censorship. With GitVault, you can make your GitHub 'web3 ready' without having to shift to a completely new version control system compromising on your developer engagement. The best part is that you don't need to be a DevOps engineer to use GitVault, it is a simple process to setup and use in a matter of few clicks (without writing any lines of code).

## How does it work?
Imagine GitVault to be a DevOps engineer who continuously monitors your GitHub repositories for any changes and automatically backs up the codebase to a safe location. GitVault creates action workflow files on your GitHub repositories that works based on the triggers you set. When a trigger is met, GitVault uploads the codebase into a Decentralised Storage Network (DSN) like [Codex](https://codex.network/), [IPFS](https://ipfs.io/) or [Arweave](https://www.arweave.org/) of your choice and generates a unique CID. This CID is then stored in a mapping that maintains a record of commit hash and their respective CID.

In the case of censorship, you can use GitVault to restore your codebase from the backup and continue your work without any disruption.

**Storage-as-a-Service :** Currently, GitVault uses integrated storage providers to leverage storage from multiple DSNs. Although, some of the storage providers like [Codex](https://codex.network/) would be bootstrapped by GitVault as they are currently in testnet.

**Payments Model :** GitVault aggregates multiple DSNs (either as a bootstrapped network or using integrated storage providers). GitVault abstracts the costs associated with storage with multiple providers and provides a unified payment system to the users.

## How to get started?

### Method 1 : Using the GitVault web app

The recommended way to get started with GitVault is the [GitVault web app](https://gitvault.xyz/). It is a simple and easy to use web app that allows you to connect your GitHub to view the repositories and enable GitVault backups. Be informed that GitVault uses GitHub OAuth for authentication and requires READ/WRITE/WORKFLOW permissions to work if you are using the web application. 

After connecting your GitHub account in the [GitVault web app](https://gitvault.xyz/), you should be able to see your repositories similar to the dashboard below :

![GitVault Web App](/blog/gitvault-app.png)

### Method 2 : Using GitVault manually

Being a privacy-focused project, GitVault respects your privacy and does not save your credentials anywhere except on the client side. However for all the pro-privacy nerds out there (like me), you can still use GitVault without having to trust the client side code by using the CLI tool. To setup GitVault backups manually, just head over to the [GitVault Documentation](https://docs.gitvault.xyz/) and follow the instructions that use the GitVault CLI or the GitHub Actions marketplace. Compared to method 1, this might take a little bit of extra time to setup (still, should just be a matter of few minutes) but is the recommended way for organizations to use GitVault without having to trust the GitVault web app.

<TODO : Insert image of GitVault CLI here>


## The state and future of GitVault

Currently, GitVault is in it's alpha phase and I have been the sole contributor to the project. I'm working on sketching out the roadmap and the features that I'm going to build next. I'm also trying to expand the team of contributors to make GitVault better and better. Here are few directions that I'm thinking of exploring:

- Add support for more DSNs
- Onchain mapping of commit hashes to CIDs using a L2
- Building a CLI tool with Waku that let's users collaborate on censored codebases anonymously
- Better pay-as-you-go model and more intuitive pricing for organisational users
- More triggers and actions
- More integrations with other tools
- More documentation and tutorials

There is a research material that I published as a part of my coursework at University College London. Although there were a lot of updates in the product architecture, this could be useful for contributors who wish to learn more about the inceptive thoughts behind GitVault. You can find this research material [here](https://gitvault.xyz/research-paper).

> Note : GitVault is new and currently in alpha. GitVault holds no liability for any loss of data until it is stable and production ready. But, this is a great time to get started and be a part of the journey as early adopters.

## Alpha Limitations

During the alpha phase, GitVault has the following limitations :

- FREE tier limitations apply. Paid plans are invite-only and not available to the public yet
- Only 2 repositories can be backed up by a user
- Only 100 GB of storage is available for users
- There could be possible downtime frequently as GitVault goes into maintenance mode multiple times a week
- Integrations with storage providers are not yet stable and hence, service outages could happen

## Dogfooding

GitVault is currently dogfooded by a couple of projects voluntarily. If you are interested in dogfooding GitVault, you are more than welcome to show interest.

If you are interested in contributing to GitVault, please reach out to me on [X](https://x.com/hackyguru) or join the [GitVault Discord](https://discord.gg/gN3fPns7Qz).

