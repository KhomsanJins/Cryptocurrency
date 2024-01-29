import styles from "../styles/AboutAccordion.module.css"
import React from "react";
import {
    Accordion,
    AccordionItem,
} from "@nextui-org/react";

export default function AboutAccordion() {
    return (
        <Accordion defaultExpandedKeys={["1"]} className="p-0">
            <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        What Is Bitcoin (BTC)?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p><a href="https://coinmarketcap.com/alexandria/article/an-intro-to-bitcoin">Bitcoin</a> is a decentralized <a href="https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies">cryptocurrency</a> originally described in a 2008 <a href="https://coinmarketcap.com/alexandria/glossary/whitepaper">whitepaper</a> by a person, or group of people, using the alias <a href="https://coinmarketcap.com/alexandria/article/who-is-satoshi-nakamoto">Satoshi Nakamoto</a>. It was launched soon after, in January 2009.</p><p><a href="https://coinmarketcap.com/alexandria/article/what-is-bitcoin">Bitcoin</a> is a peer-to-peer online currency, meaning that all <a href="https://coinmarketcap.com/alexandria/article/how-long-does-a-bitcoin-transaction-take">transactions</a> happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”</p><p>Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the <a href="https://coinmarketcap.com/alexandria/article/a-beginner-s-guide-to-investing-in-cryptocurrencies">first-ever cryptocurrency</a> to come into actual use.</p></div>
            </AccordionItem>

            <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        Who Are the Founders of Bitcoin?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, the true identity of the person — or organization — that is behind the alias remains unknown.</p><p>On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “<a href="https://coinmarketcap.com/alexandria/glossary/blockchain">blockchain</a>.”</p><p>Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the <a href="https://coinmarketcap.com/alexandria/glossary/genesis-block">genesis block</a>, thus launching the world’s first cryptocurrency. Bitcoin price was $0 when first introduced, and most Bitcoins were obtained via mining, which only required moderately powerful devices (e.g. PCs) and mining software. The first known Bitcoin commercial transaction occurred on May 22, 2010, when programmer Laszlo Hanyecz traded 10,000 Bitcoins for two pizzas. At Bitcoin price today in mid-September 2021, those pizzas would be worth an astonishing $478 million. This event is now known as “Bitcoin Pizza Day.” In July 2010, Bitcoin first started trading, with the Bitcoin price ranging from $0.0008 to $0.08 at that time.</p><p>However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, he handed the network alert key and control of the code repository to Gavin Andresen, who later became lead developer at the Bitcoin Foundation. Over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.</p><p>Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others.</p></div>
            </AccordionItem>

            <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        What Makes Bitcoin Unique?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.</p><p>It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.</p><p><a href="https://coinmarketcap.com/">The entire cryptocurrency market</a> — now worth more than $2 trillion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.</p><p>Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest <a href="https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies">cryptocurrency</a>, with a <a href="https://coinmarketcap.com/alexandria/glossary/market-capitalization-market-cap-mcap">market capitalization</a> that surpassed the $1 trillion mark in 2021, after Bitcoin price hit an all-time high of $64,863.10 on April 14, 2021. This is owing in large part to growing institutional interest in Bitcoin, and the ubiquitousness of platforms that provide use-cases for BTC: <a href="https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-wallet">wallets</a>, exchanges, payment services, online games and more.</p></div>
            </AccordionItem>

            <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        How Much Bitcoin Is in Circulation?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>Bitcoin’s <a href="https://coinmarketcap.com/alexandria/article/what-is-tokenomics">total supply</a> is limited by its software and will never exceed 21,000,000 coins. New coins are created during the process known as <a href="https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin">“mining”</a>: as transactions are relayed across the network, they get picked up by miners and packaged into blocks, which are in turn protected by complex cryptographic calculations.</p><p>As compensation for spending their computational resources, the miners receive rewards for every block that they successfully add to the blockchain. At the moment of Bitcoin’s launch, the reward was 50 bitcoins per block: this number gets <a href="https://coinmarketcap.com/halving/bitcoin/">halved</a> with every 210,000 new blocks mined — which takes the network roughly four years. As of 2020, the block reward has been halved three times and comprises 6.25 bitcoins.</p><p>Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders before it became available to the public. However, during the first few years of BTC’s existence, the competition between miners was relatively low, allowing the earliest network participants to accumulate significant amounts of coins via regular mining: Satoshi Nakamoto alone is believed to own over a million Bitcoin.</p><p><a href="https://coinmarketcap.com/alexandria/article/how-to-mine-bitcoin">Mining Bitcoins</a> can be very profitable for miners, depending on the current hash rate and the price of Bitcoin. While the process of mining Bitcoins is complex, we discuss <a href="https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin">how long it takes</a> to mine one Bitcoin on CoinMarketCap <a href="https://coinmarketcap.com/alexandria/">Alexandria</a> — as we wrote above, mining Bitcoin is best understood as how long it takes to mine one block, as opposed to one Bitcoin. As of mid-September 2021, the Bitcoin mining reward is capped to 6.25 BTC after the <a href="https://coinmarketcap.com/alexandria/article/bitcoin-halvings-what-they-are-why-they-happen-and-why-you-should-care">2020 halving</a>, which is roughly $299,200 in Bitcoin price today.</p></div>
            </AccordionItem>

            <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        How Is the Bitcoin Network Secured?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>Bitcoin is secured with the <a href="https://coinmarketcap.com/alexandria/glossary/sha-256">SHA-256 algorithm</a>, which belongs to the SHA-2 family of hashing algorithms, which is also used by its fork Bitcoin Cash (<a href="https://coinmarketcap.com/currencies/bitcoin-cash/">BCH</a>), as well as several other cryptocurrencies.</p></div>
            </AccordionItem>

            <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        What Is Bitcoin’s Role as a Store of Value?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>Bitcoin is the first decentralized, peer-to-peer digital currency. One of its most important functions is that it is used as a decentralized store of value. In other words, it provides for ownership rights as a physical asset or as a unit of account. However, the latter store-of-value function has been debated. Many crypto enthusiasts and economists believe that high-scale adoption of the top currency will lead us to a new modern financial world where transaction amounts will be denominated in smaller units.</p><p>The smallest units of Bitcoin, 0.00000001 BTC, are called <a href="https://coinmarketcap.com/alexandria/glossary/satoshi-sats">Satoshis</a> (or Sats in short), in a nod to the pseudonymous creator. At Bitcoin price now, 1 Satoshi is equivalent to roughly $0.00048.</p><p>The top crypto is considered a store of value, like gold, for many — rather than a currency. This idea of the first cryptocurrency as a store of value, instead of a payment method, means that many people buy the crypto and hold onto it long-term (or HODL) rather than spending it on items like you would typically spend a dollar — treating it as digital gold.</p></div>
            </AccordionItem>

            <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title={
                    <p className="text-[#0D1421] text-[16px] font-semibold">
                        How Is Bitcoin’s Technology Upgraded?
                    </p>
                }
            >
                <div className={styles.acd_desc}><p>A <a href="https://coinmarketcap.com/alexandria/glossary/hard-fork-blockchain">hard fork</a> is a radical change to the protocol that makes previously invalid blocks/transactions valid, and therefore requires all users to upgrade. For example, if users A and B are disagreeing on whether an incoming transaction is valid, a hard fork could make the transaction valid to users A and B, but not to user C.</p><p>A hard fork is a protocol upgrade that is not backward compatible. This means every node (computer connected to the Bitcoin network using a client that performs the task of validating and relaying transactions) needs to upgrade before the new blockchain with the hard fork activates and rejects any blocks or transactions from the old blockchain. The old blockchain will continue to exist and will continue to accept transactions, although it may be incompatible with other newer Bitcoin clients.</p><p>A <a href="https://coinmarketcap.com/alexandria/glossary/soft-fork-blockchain">soft fork</a> is a change to the Bitcoin protocol wherein only previously valid blocks/transactions are made invalid. Since old nodes will recognise the new blocks as valid, a soft fork is backward-compatible. This kind of fork requires only a majority of the miners upgrading to enforce the new rules.</p><p>Some examples of prominent cryptocurrencies that have undergone hard forks are the following: <a href="https://coinmarketcap.com/alexandria/article/what-is-bitcoin-cash">Bitcoin’s hard fork</a> that resulted in Bitcoin Cash, <a href="https://coinmarketcap.com/alexandria/article/ethereum-vs-ethereum-classic">Ethereum’s hard fork</a> that resulted in Ethereum Classic.</p><p>Bitcoin Cash has been hard forked since its original forking, with the creation of Bitcoin SV. Read more about the difference between Bitcoin, Bitcoin Cash and Bitcoin SV <a href="https://coinmarketcap.com/alexandria/article/bitcoin-vs-bitcoin-cash-vs-bitcoin-sv">here</a>.</p></div>
            </AccordionItem>
        </Accordion>
    );
}