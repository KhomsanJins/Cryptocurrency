"use client"

import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import React from "react"
import {
    Tooltip,
    ScrollShadow,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react"
import {
    FaGasPump,
    FaCaretDown,
    FaCaretUp
} from "react-icons/fa";
import {
    MdDarkMode,
    MdOutlineKeyboardArrowDown
} from "react-icons/md";
import {
    AiOutlineExclamationCircle
} from "react-icons/ai";
import {
    IoSearch,
    IoCloseSharp
} from "react-icons/io5";
import {
    GiHamburgerMenu
} from "react-icons/gi";

export default function Navbar() {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header>
            <div className="max-w-full hidden xl:block">
                <div className="px-[20px] w-[100%] py-[8px] flex items-center justify-between border-b-[1px] border-solid border-b-[rgba(0, 0, 0, 0.1)]">
                    <ScrollShadow hideScrollBar offset={100} orientation="horizontal" className="max-w-[600px] xl:max-w-[720px] 2xl:max-w-[900px] max-h-[18px]">
                        <div className={styles.list_global_stats}>
                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Cryptos:</span>
                                <Link href="">
                                    2M+
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Exchanges:</span>
                                <Link href="">
                                    695
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Market Cap:</span>
                                <Link href="">
                                    $1.62T
                                </Link>
                                <span className={styles.down}>
                                    <FaCaretDown /> 3.65%
                                </span>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>24h Vol:</span>
                                <Link href="">
                                    $64.49B
                                </Link>
                                <span className={styles.up}>
                                    <FaCaretUp />23.65%
                                </span>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Dominance:</span>
                                <Link href="">
                                    BTC: 49.5% ETH: 18.3%
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <FaGasPump className="mr-[2px]" />
                                <span className={styles.base_txt}>ETH Gas:</span>
                                <Link href="">
                                    35 Gwei
                                    <MdOutlineKeyboardArrowDown />

                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Fear & Greed:</span>
                                <Link href="">
                                    56/100
                                </Link>
                            </div>
                        </div>
                    </ScrollShadow>

                    <div className="flex items-center">
                        <Link href="" className="flex items-center p-[4px] text-black rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                            <span className="text-[12px] ml-[5px] font-medium">
                                English
                            </span>

                            <FaCaretDown />
                        </Link>

                        <Link href="" className="flex items-center p-[4px] text-black rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                            <Image src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"} width={14} height={14} alt="MenuCmcIcon" />

                            <span className="text-[12px] ml-[5px] font-medium">
                                USD
                            </span>

                            <FaCaretDown />
                        </Link>

                        <Link href="" className="flex items-center p-[4px] text-black rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                            <MdDarkMode />
                        </Link>

                        <span className={styles.line_btw}></span>

                        {/* <Link href="">
                            
                        </Link> */}

                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    size="sm"
                                    color="light"
                                    // variant="light"
                                    className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]"
                                >
                                    <span className="text-[12px] font-medium">
                                        Get listed
                                    </span>

                                    <MdOutlineKeyboardArrowDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">
                                    <Link href="">
                                        Cryptocurrency
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="copy">
                                    <Link href="">
                                        Exchange
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="edit">
                                    <Link href="">
                                        Page updates
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Link href="" className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]">
                            <span className="text-[12px] font-medium">
                                API
                            </span>
                        </Link>

                        <Tooltip
                            showArrow
                            placement="bottom"
                            classNames={{
                                base: [
                                    // arrow color
                                    "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                ],
                                content: [
                                    "p-[16px] rounded-[8px] shadow-none",
                                    "bg-white w-[320px]",
                                ],
                            }}
                            content={
                                <div>
                                    <div className="text-small">
                                        <div className="flex items-start">
                                            <Image
                                                src="/promo-2.png"
                                                width={64}
                                                height={64}
                                                alt="Promo Diamonds"

                                                className="mr-[10px]"
                                            />

                                            <div className="">
                                                <div className="font-bold text-black mb-[5px]">
                                                    CoinMarketCap Diamonds
                                                </div>
                                                <span className="text-[12px]">
                                                    Earn CoinMarketCap Rewards by completing various tasks on the CoinMarketCap website.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <Link href="" className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"} width={20} height={20} alt="My Diamonds" />
                            </Link>
                        </Tooltip>

                        <Link href="" className="flex items-center px-[16px] h-[34px] ml-[5px] text-[#3861fb] rounded-[8px] hover:bg-[#EFF2F5] border-[1px] border-[solid] border-[#3861fb] transition-all duration-[.3s]">
                            <span className="text-[12px] font-medium">
                                Log In
                            </span>
                        </Link>

                        <Link href="" className="flex items-center px-[16px] h-[34px] ml-[5px] text-[#ffffff] rounded-[8px] bg-[#3861fb] hover:bg-[rgba(56,97,251,0.9)] border-[1px] border-[solid] border-[#3861fb] transition-all duration-[.3s]">
                            <span className="text-[12px] font-medium">
                                Sign Up
                            </span>
                        </Link>

                        <div className="absolute top-[-7px] right-0 w-[48px]">
                            <Image
                                src="/signupGift.gif"
                                width={48}
                                height={48}
                                alt="Promo Diamonds"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-[20px] w-[100%] flex items-center justify-between border-b-[1px] border-solid border-b-[rgba(0, 0, 0, 0.1)]">
                    <div className="flex items-center">
                        <Link href="/" className={styles.logo}></Link>

                        {/* menu start */}
                        <ul className={styles.list_h_menu}>
                            <li>
                                <Tooltip
                                    showArrow
                                    placement="bottom"
                                    classNames={{
                                        base: [
                                            // arrow color
                                            "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                        ],
                                        content: [
                                            "p-[16px] rounded-[8px] shadow-none",
                                            "bg-white",
                                        ],
                                    }}
                                    content={
                                        <div className={styles.wrap_sub_menu_four_squar}>
                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    CRYPTOCURRENCIES
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Ranking
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Recently Added
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Categories
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Spotlight
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Gainers & Losers
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Global Charts
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Historical Snapshots
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBitcoinETFsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Bitcoin ETFs
                                                            </span>
                                                            <span className={styles.badge}>
                                                                New
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>

                                                <hr className="my-[12px]"></hr>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuLegalIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Legal Tender Countries
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Fiats / Companies Rankings
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    NFT
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Overall NFT Stats
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Top Collections
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="30" width="30" viewBox="0 0 30 30"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#16C784"></circle><path fillRule="evenodd" clipRule="evenodd" d="M12.6667 9.33325C12.2065 9.33325 11.8334 9.70635 11.8334 10.1666V10.9999H11C10.0796 10.9999 9.33337 11.7461 9.33337 12.6666V20.9999C9.33337 21.9204 10.0796 22.6666 11 22.6666H21C21.9205 22.6666 22.6667 21.9204 22.6667 20.9999V12.6666C22.6667 11.7461 21.9205 10.9999 21 10.9999H20.1667V10.1666C20.1667 9.70635 19.7936 9.33325 19.3334 9.33325C18.8731 9.33325 18.5 9.70635 18.5 10.1666V10.9999H13.5V10.1666C13.5 9.70635 13.1269 9.33325 12.6667 9.33325ZM12.6667 13.4999C12.2065 13.4999 11.8334 13.873 11.8334 14.3333C11.8334 14.7935 12.2065 15.1666 12.6667 15.1666H19.3334C19.7936 15.1666 20.1667 14.7935 20.1667 14.3333C20.1667 13.873 19.7936 13.4999 19.3334 13.4999H12.6667Z" fill="white"></path></svg></svg>
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Upcoming Sales
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    On Chain Data
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexscan.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Dex Pairs
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRanking.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Chain Ranking
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link href="">
                                        Cryptocurrencies
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip
                                    showArrow
                                    placement="bottom"
                                    classNames={{
                                        base: [
                                            // arrow color
                                            "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                        ],
                                        content: [
                                            "p-[16px] rounded-[8px] shadow-none",
                                            "bg-white",
                                        ],
                                    }}
                                    content={
                                        <div>
                                            <div className="text-small">
                                                <ul className={[styles.list_sub_menu]}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Spot
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Derivatives
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                DEX
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link href="">
                                        Exchanges
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip
                                    showArrow
                                    placement="bottom"
                                    classNames={{
                                        base: [
                                            // arrow color
                                            "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                        ],
                                        content: [
                                            "p-[16px] rounded-[8px] shadow-none",
                                            "bg-white",
                                        ],
                                    }}
                                    content={
                                        <div>
                                            <div className="text-small">
                                                <ul className={[styles.list_sub_menu]}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Feeds
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/topics.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Topics
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/lives.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Lives
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Articles
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link href="">
                                        Community
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip
                                    showArrow
                                    placement="bottom"
                                    classNames={{
                                        base: [
                                            // arrow color
                                            "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                        ],
                                        content: [
                                            "p-[16px] rounded-[8px] shadow-none",
                                            "bg-white",
                                        ],
                                    }}
                                    content={
                                        <div className="flex">
                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    PRODUCTS
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Converter
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                CMC Labs
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTelegramBotIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Telegram Bot
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                </ul>

                                                <hr className="my-[12px]"></hr>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.light.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Crypto API
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.light.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Site Widgets
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    CAMPAIGNS
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Airdrops
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Diamond Rewards
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Learn & Earn
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="text-small">
                                                <div className="ms-[10px] mb-[10px]">
                                                    CALENDARS
                                                </div>

                                                <ul className={styles.list_sub_menu}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                ICO Calendar
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Events Calendar
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link href="">
                                        Products
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip
                                    showArrow
                                    placement="bottom"
                                    classNames={{
                                        base: [
                                            // arrow color
                                            "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                        ],
                                        content: [
                                            "p-[16px] rounded-[8px] shadow-none",
                                            "bg-white",
                                        ],
                                    }}
                                    content={
                                        <div>
                                            <div className="text-small">
                                                <ul className={[styles.list_sub_menu]}>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                News
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Academy
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Research
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Videos
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                                            <div>
                                                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg"} width={30} height={30} alt="MenuCmcIcon" />
                                                            </div>
                                                            <span className="text-black font-medium ms-[10px]">
                                                                Glossary
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 16 16" fill="none" className="ms-[5px]"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449" stroke="#A6B0C3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link href="">
                                        Learn
                                    </Link>
                                </Tooltip>
                            </li>
                        </ul>
                        {/* menu end */}
                    </div>

                    <div className="flex items-center">
                        <Tooltip
                            showArrow
                            placement="bottom"
                            classNames={{
                                base: [
                                    // arrow color
                                    "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                ],
                                content: [
                                    "p-[16px] rounded-[8px] shadow-none",
                                    "bg-white",
                                ],
                            }}
                            content={
                                <div>
                                    <div className="text-small">
                                        <div className="">
                                            <div className="w-100 flex justify-center mb-[20px]">
                                                <Image
                                                    src="/1.png"
                                                    width={60} height={60} alt="logo coin"
                                                />
                                            </div>

                                            <div className="text-center">
                                                <div className="font-bold text-black">Bitcoin Halving Countdown</div>
                                                <div className="flex items-center">
                                                    <div className="text-[11px]">The halving is expected to take place in April 2024.</div>
                                                    <AiOutlineExclamationCircle />
                                                </div>
                                            </div>

                                            <div className="">
                                                <ul className={styles.list_time_countdown}>
                                                    <li>
                                                        <div className="font-bold text-black">99</div>
                                                        <div className="text-[11px]">Days</div>
                                                    </li>
                                                    <li>
                                                        <div className="font-bold text-black">3</div>
                                                        <div className="text-[11px]">Hrs</div>
                                                    </li>
                                                    <li>
                                                        <div className="font-bold text-black">17</div>
                                                        <div className="text-[11px]">Min</div>
                                                    </li>
                                                    <li>
                                                        <div className="font-bold text-black">12</div>
                                                        <div className="text-[11px]">Sec</div>
                                                    </li>
                                                </ul>

                                                <div className="mt-[10px] flex items-center">
                                                    <div className="bg-[#F8FAFD] px-[4px] py-[8px] rounded-[8px] text-center w-[50%] mr-[2px]">
                                                        <div className="text-[11px]">Blocks until halving</div>
                                                        <div className="font-bold text-black">13,618</div>
                                                    </div>
                                                    <div className="bg-[#F8FAFD] px-[4px] py-[8px] rounded-[8px] text-center w-[50%] ml-[2px]">
                                                        <div className="text-[11px]">Approximate block time</div>
                                                        <div className="font-bold text-black">10.48 Min</div>
                                                    </div>
                                                </div>

                                                <Link href="" className="w-[100%] h-[32px] mt-[10px] bg-[#3861fb] hover:bg-[rgba(56,97,251,0.9)] transition-all duration-[.3s] px-[8px] rounded-[8px] flex items-center justify-center">
                                                    <span className="text-[12px] text-white font-bold text-nowrap">
                                                        See More
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <Link href="" className="flex items-center mr-[10px]">
                                <Image src="/1.png" width={20} height={20} alt="logo" />
                                <span className="text-[12px] ml-[5px] text-nowrap">
                                    Halving: 99D
                                </span>
                            </Link>
                        </Tooltip>

                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#a6b0c3]">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>

                            <span className="text-[12px] ml-[5px]">
                                Watchlist
                            </span>
                        </Link>

                        <Link href="" className="flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#a6b0c3]">
                                <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                            </svg>

                            <span className="text-[12px] ml-[5px]">
                                Portfolio
                            </span>
                        </Link>

                        {/* search start */}
                        <div className="bg-[#EFF2F5] ms-[10px] rounded-[8px] p-[8px] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#a6b0c3]">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>

                            <div className="text-[12px] text-[#a6b0c3] ms-[5px] w-[200px]">Search</div>

                            <Tooltip
                                showArrow
                                placement="bottom-end"
                                color="secondary"
                                size="sm"
                                classNames={{
                                    base: [
                                        // arrow color
                                        "before:bg-[#0d1421] rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                    ],
                                    content: [
                                        "p-[8px] rounded-[8px] shadow-none",
                                        "bg-[#0d1421]",
                                    ],
                                }}
                                content={
                                    <div >
                                        <span>
                                            Use to trigger search
                                        </span>
                                    </div>
                                }
                            >
                                <div className="h-[20px] w-[20px] rounded-[4px] bg-[#a6b0c3] text-[#fff] leading-[20px] text-center">/</div>
                            </Tooltip>

                        </div>
                        {/* search end */}
                    </div>

                </div>
            </div>

            <div className="max-w-full block xl:hidden">
                <div className="px-[20px] py-[8px] w-[100%] flex items-center justify-between border-b-[1px] border-solid border-b-[rgba(0, 0, 0, 0.1)]">
                    <div className="flex items-center">
                        <Link href="/" className={styles.logo}></Link>
                    </div>

                    <div className="flex items-center">
                        <Link href="" className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] bg-[#ffffff] transition-all duration-[.3s]">
                            <span className="text-[16px] font-medium">
                                <IoSearch />
                            </span>
                        </Link>

                        <Tooltip
                            showArrow
                            placement="bottom"
                            classNames={{
                                base: [
                                    // arrow color
                                    "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                                ],
                                content: [
                                    "p-[16px] rounded-[8px] shadow-none",
                                    "bg-white w-[320px]",
                                ],
                            }}
                            content={
                                <div>
                                    <div className="text-small">
                                        <div className="flex items-start">
                                            <Image
                                                src="/promo-2.png"
                                                width={64}
                                                height={64}
                                                alt="Promo Diamonds"

                                                className="mr-[10px]"
                                            />

                                            <div className="">
                                                <div className="font-bold text-black mb-[5px]">
                                                    CoinMarketCap Diamonds
                                                </div>
                                                <span className="text-[12px]">
                                                    Earn CoinMarketCap Rewards by completing various tasks on the CoinMarketCap website.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <Link href="" className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                <Image src={"https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"} width={20} height={20} alt="My Diamonds" />
                            </Link>
                        </Tooltip>

                        <Link href="" onClick={handleSmallScreenNavigation} className="flex items-center p-[8px] ml-[5px] text-black rounded-[8px] bg-[#ffffff] transition-all duration-[.3s]">
                            <span className="text-[16px] font-medium">
                                {menuIcon ?
                                    (<IoCloseSharp />)
                                    :
                                    (<GiHamburgerMenu />)
                                }
                            </span>
                        </Link>
                    </div>

                </div>

                <div className="px-[20px] py-[8px] w-[100%] flex items-center justify-between border-b-[1px] border-solid border-b-[rgba(0, 0, 0, 0.1)]">
                    <ScrollShadow hideScrollBar offset={100} orientation="horizontal" className="max-w-[100%] max-h-[18px]">
                        <div className={styles.list_global_stats}>
                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Cryptos:</span>
                                <Link href="">
                                    2M+
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Exchanges:</span>
                                <Link href="">
                                    695
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Market Cap:</span>
                                <Link href="">
                                    $1.62T
                                </Link>
                                <span className={styles.down}>
                                    <FaCaretDown /> 3.65%
                                </span>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>24h Vol:</span>
                                <Link href="">
                                    $64.49B
                                </Link>
                                <span className={styles.up}>
                                    <FaCaretUp />23.65%
                                </span>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Dominance:</span>
                                <Link href="">
                                    BTC: 49.5% ETH: 18.3%
                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <FaGasPump className="mr-[2px]" />
                                <span className={styles.base_txt}>ETH Gas:</span>
                                <Link href="">
                                    35 Gwei
                                    <MdOutlineKeyboardArrowDown />

                                </Link>
                            </div>

                            <div className={styles.item_global_stats}>
                                <span className={styles.base_txt}>Fear & Greed:</span>
                                <Link href="">
                                    56/100
                                </Link>
                            </div>
                        </div>
                    </ScrollShadow>
                </div>
            </div>
        </header>
    )
}