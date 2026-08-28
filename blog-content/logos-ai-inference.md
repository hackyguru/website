---
title: "Xenia — AI Inference for Strangers"
description: "A decentralized AI inference marketplace with no server in the middle — providers you discover without a registry, prompts the network cannot read and payment that works without naming the buyer"
date: "2026-08-28"
author: "guru"
tags: ["AI", "Web3", "Privacy", "Technical"]
coverImage: "/blog/xenia.png"
aiAssisted: true
---

> Disclaimer : The content here is based on my personal opinion and does not represent the collective opinion of any organization.

Every AI app you have ever built talks to someone's server. You get an API key, you POST to a URL and a company decides what you are allowed to ask. The model runs on their hardware, the prompt sits in their logs and the bill arrives at the end of the month.

I wanted to see what happens if you delete the server.

## What it is

**Xenia** is a working AI inference marketplace built on the [Logos](https://logos.co/) stack, with nothing in the middle.

### Why that name

*Xenia* was the ancient Greek rule of guest-friendship. The detail that matters is the **order of operations**. A host fed, bathed then housed an arriving traveler *before* asking who they were. Interrogating a guest first was the rudeness. In the Odyssey the sequence repeats almost formulaically — Telemachus seats a disguised Athena at his table, Nestor's household serves the meal, only afterwards does anyone raise the question of names.

That inversion is the protocol. A provider here answers a sealed prompt from someone it cannot identify, then forgets them. Service precedes identification rather than depending on it. Every centralized API reverses this: authenticate, then be served.

Three more pieces of the custom map onto the architecture almost uncomfortably well.

**The token.** Guest-friends exchanged a *symbolon* — a tablet or knucklebone snapped in two, each keeping a half. Years later, even generations later, two strangers could press the broken edges together and the fit proved the bond. No archive, no clerk, no register of who owed hospitality to whom. Verification was local and physical. That is exactly what a self-certifying fingerprint is: a provider's id is the hash of its own public key, so the halves either match or they do not, checkable by anyone, on the spot, with no registry to consult.

**The false name.** Xenia had a monster at its edge. Polyphemus inverts every rule — he demands names first, then eats his guests. Odysseus survives by answering *Outis*, Nobody. Anonymity as the guest's defence against a host who cannot be trusted. Here that is the fresh ephemeral reply key on every prompt: you do not have to know the host is honest, because you were never nameable to begin with.

**The absent enforcer.** Xenia had no police. It rested on Zeus Xenios, which in practice meant the obligation was structural rather than institutional — nobody administered it, yet violating it was the act that started the Trojan War. There is no enforcer in this system either. The guarantees are structural: a prompt is unreadable because of the mathematics, not because a policy says so.

The Greeks built a protocol for dealing safely with strangers precisely because they had no central authority to vouch for anyone. That constraint is ours again.

A desktop app publishes a prompt into a p2p content topic. A headless node — anywhere in the world, running [ollama](https://ollama.com/) on whatever hardware someone happens to own — hears it, generates a completion then publishes the answer back. No inference API. No API key. No account.

```
   Desktop app (the user)                     Headless node (the provider)
   ──────────────────────                     ────────────────────────────
   sendPrompt("explain CRDTs") ──▶ delivery ─┐
                                              │  /xenia/1/<topic>/json
                                              ▼
                                 ┌─────────────────────────┐
                                 │  content topic on the   │
                                 │  Logos delivery network │
                                 └─────────────────────────┘
                                              │
   responseReceived ◀── delivery ◀── xenia_provider ◀── ollama
```

The whole design is one idea repeated: **same content topic, two roles.** Both sides subscribe to an identical string. Gossip routing does the rest.

Providers advertise themselves by publishing signed capability cards — the models they serve, current load, price — onto a well-known discovery topic. Users build their own verified roster from those cards then route prompts to whichever provider they like: least loaded, cheapest, a specific one they trust, or only ones serving a particular model.

Payment works, with a caveat I will get to.

## What it solves

Consider what an ordinary API call hands over, most of it incidentally.

| | Centralized API | This |
|---|---|---|
| Who you are | Account, billing identity, IP | Nothing. No account exists |
| What you asked | Logged, retained, trainable | Sealed. Provider decrypts, answers, forgets |
| What you asked *last week* | Linked to the same account | Unlinkable. Fresh ephemeral key per prompt |
| Who can serve you | Whoever the vendor approves | Anyone with a laptop |
| Whether you can be cut off | A row in their database | No list to be removed from |
| How you pay | Card, name attached | Shielded balance. Sender hidden by a zk circuit |

The dependency people usually notice is the model. The one that actually binds you is **identity**: your prompts are attached to a durable account forever. That account can be suspended, subpoenaed or repriced.

Two problems that sound the same but are not. **Privacy** is nobody seeing your prompt. **Permissionlessness** is nobody deciding whether you get an answer at all. A vendor could encrypt everything at rest tomorrow, then still deplatform you next week. This design goes after both, because solving one alone leaves you dependent in the way that matters.

## How the architecture differs

Four decisions carry the weight.

**Discovery needs no registry.** Providers announce, users verify signatures locally then keep their own roster. Entries expire after 30 seconds, so a dead provider ages out on its own. There is no directory to be listed in, which means there is no directory to be removed from.

**Identity is self-certifying.** One BIP-39 mnemonic derives an Ed25519 signing key plus an X25519 box key by HMAC domain separation. A provider's id is then simply `sha256(sign_pk)[0:20]`.

That definition is the whole trick. The id **is** the hash of the public key, so a provider cannot lie about which key belongs to it. Verifying it is a local hash — no registry, no chain, no trusted third party. It survives restarts. It is recoverable from the mnemonic alone. A centralized service would solve this with a database of who is who. Here the name is the proof.

**Prompts are sealed to the provider you chose.** What travels the network is:

```json
{ "v":2, "type":"prompt", "to":"<providerId>", "id":"<uuid>", "box":"<sealed>" }
```

No prompt text. No sender id. Only routing crumbs. The box is ECIES — ephemeral X25519, ECDH, an HMAC-SHA256 KDF bound to *both* public keys, then ChaCha20-Poly1305. Binding the KDF to both keys is what stops a sealed box being replayed at a different recipient.

The reply key inside is **fresh per prompt**, so two questions from the same person cannot be linked by an observer. Against a centralized provider, unlinkability is not achievable at all — the account *is* the link.

**Payment does not identify the buyer.** This is where it gets interesting, because charging usually destroys everything above. A card names you. So does a transfer from a known address.

The user pays from a *shielded* balance on the Logos Execution Zone, so a zk circuit hides the sender. The provider only ever observes that a public credit arrived, verified with a bare balance read — it needs no wallet module at all, which is what lets a provider run on a headless box with nothing but an identity file.

Payment is per session rather than per prompt, forced by physics rather than taste: a shielded transfer takes about a minute to prove and settle, so gating every prompt on one would be unusable. A payment unlocks a quota of prompts. The credential rides inside the sealed envelope, in the same slot a proof-of-work stamp uses, so the network never sees it.

Enforcement is real. A prompt without a funded session gets declined, not served.

## What's next — the honest gaps

I would rather write this than pretend the thing is finished.

**The money does not really leave.** This is the big one. The rail works end to end — a genuine zk transfer settles on the hosted testnet, the provider verifies it then unlocks a quota, sessions survive restarts. But the provider's payment account is one **the user's own wallet controls**. Alice pays Bob where Bob is also Alice. Every mechanism is exercised. No value moves between two independent people.

The cause is a build wall rather than a design flaw. Only the bundled execution zone module can *write* to the hosted testnet, because its program image IDs match the deployed ones. A source build's do not, so its writes are dropped silently — no error, they just vanish.

**Bilateral anonymity is wired half way.** Today the user is anonymous while the provider's account is public, since a transparent account is what allows verification by a plain read. Shielding the provider too was assumed blocked by that same wall. It is not. A provider node already builds the execution zone module, creates its own wallet plus a shielded receiving address then syncs the chain — which *is* the note trial-decrypt machinery. The wall blocks spending. It does not block receiving. Receiving is all reads.

**Pricing is cruder than it looks.** The shielded transfer has no memo field, so a payment's *amount* doubles as its session id — a price floor plus a random salt to keep it unique. The salt is larger than the floor, so it dominates. Two identical sessions can differ tenfold for reasons unrelated to cost.

**Per-token billing needs a settlement model.** Capturing token counts is trivial. The real problem is that you cannot know the count until after the answer is served, which is backwards from prepay. That needs streaming payments. The intended primitive exists but is not deployed on the testnet.

None of these are reasons the idea does not work. They are the distance between a proof and a product, which is nearly always longer than it looks from the proof.

## How to contribute

Concrete work, roughly easiest to hardest.

**Run a provider.** The most useful thing anyone can do. A laptop with ollama and a shell script joins the market — no approval, no listing fee. Every real provider makes the roster less of a demo. Bring a model nobody else is serving.

**Try to break the threat model.** Everything above is a claim: prompts unreadable, providers unable to lie about their identity, prompts unlinkable across sessions, payment not naming the buyer. I would rather someone knock one down now. The sealed-box construction and the announce verification path are the places I would attack first.

**Make the money genuinely move.** The highest-value gap. It is wiring rather than research. Three pieces: advertise the shielded receiving address on the capability card, verify eligibility by note scan instead of a public balance read, then pay with a private transfer rather than a deshield. The receiving side is already proven to work.

**Per-deposit attribution.** Kill the amount-as-session-id hack by attributing deposits through an indexer, which effectively restores the memo field the circuit lacks. The tradeoff is a third-party dependency in the verification path, so it needs someone with an opinion about whether that is worth it.

**Reputation that is not a whitelist.** Trust today is a user-curated list plus canary audits that catch a provider advertising one model while serving a cheaper one. That is a floor, not a system. Doing better without reintroducing a central scorer is genuinely open.

The interesting constraint across all of it: any mechanism you add has to work without a party everyone trusts. That rules out most of the obvious answers, which is what makes it worth doing.

---

*The full source lives in my Logos workshop series. If you build something on top of this, or find a hole in the threat model, I would genuinely like to hear about it.*
