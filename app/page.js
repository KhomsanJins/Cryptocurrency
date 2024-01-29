'use client'

import styles from "../styles/Page.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import React from "react";
import {
  Tooltip,
  Button,
  Progress,
  ScrollShadow,
  Avatar,
  Breadcrumbs,
  BreadcrumbItem,
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";

import ModalTags from "./modalTags"
import News from "./News"
import AboutAccordion from "./aboutAccordion"
import AlsoWatch from "./alsoWatch"
import Charts from "./lineChart"
// import BasicArea from "./lineReChart";
import DoughnutChart from "./doughnutChart"

// icon start
import {
  FaRegStar,
  FaStar,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";
import {
  FiPlus,
  FiMinus
} from "react-icons/fi";
import {
  IoShareSocialOutline,
  IoDocumentOutline,
  IoLogoGithub,
  IoLogoReddit,
  IoSearch,
  IoWalletOutline,
  IoCopyOutline,
  IoEyeOutline,
  IoImageOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import {
  IoIosArrowDown,
} from "react-icons/io";
import {
  AiOutlinePieChart,
  AiOutlineExclamationCircle,
  AiOutlineLike,
} from "react-icons/ai";
import {
  MdVerified,
  MdOutlineKeyboardArrowDown,
  MdOutlineShowChart,
  MdCandlestickChart,
  MdOutlineFileDownload
} from "react-icons/md";
import {
  TbWorld,
  TbSpeakerphone
} from "react-icons/tb";
import {
  RiShareBoxLine
} from "react-icons/ri";
import {
  LuPen,
  LuLink
} from "react-icons/lu";
import {
  FcLike,
  FcOnlineSupport,
  FcReadingEbook
} from "react-icons/fc";
import {
  LiaCommentDots,
  LiaRetweetSolid
} from "react-icons/lia";
import {
  BsThreeDots
} from "react-icons/bs";
import {
  PiUserCirclePlusLight
} from "react-icons/pi";
// icon end

export default function Home() {
  // export default async function Home() {

  const [liked, setLiked] = useState(false);

  const handleFav = () => {
    setLiked(!liked);
  }

  // api price start
  const ids = "bitcoin"
  const vs_currencies = "usd"

  const vs_currency = "usd"
  const ids2 = "bitcoin"

  const [data, setData] = useState(null)

  // 
  const [datacurrnecies, setDatacurrnecies] = useState("")

  const [datavm, setDatavm] = useState("")

  useEffect(() => {
    // console.log(123)
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + ids + '&vs_currencies=' + vs_currencies + '&include_market_cap=true' + '&include_24hr_change=true' + '&include_24hr_vol=true' + '&include_last_updated_at=true')
      .then((res) => res.json())
      .then((jsondata) => {
        setData(jsondata)

        console.log(jsondata)
      })
      ,

      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + vs_currency + '&ids=' + ids2 + '&sparkline=false')
        .then((res) => res.json())
        .then((currneciesData) => {
          setDatacurrnecies(currneciesData)

          console.log(currneciesData)
        })
      ,

      fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
        .then((res) => res.json())
        .then((vmData) => {
          setDatavm(vmData)

          console.log(vmData)
        })
  }, [])
  // console.log(1, data)
  // 

  // 
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All pairs"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  // 

  // 
  const [selectedKeysMarkets, setSelectedKeysMarkets] = React.useState(new Set(["1"]));

  const selectedValueMarkets = React.useMemo(
    () => Array.from(selectedKeysMarkets).join(", ").replaceAll("_", " "),
    [selectedKeysMarkets]
  );
  // 

  return (
    <main>
      <div className={styles.sec_content}>
        <div className={styles.box_coin}>
          <div className="relative">
            <div className="hidden lg:block relative lg:sticky top-[-20px] left-0 z-10 bg-white p-[20px] m-[-20px]">
              <div className="flex flex-wrap items-center justify-between mb-0">
                <div className="flex items-center">
                  <Image
                    src="/1.png"
                    width={24}
                    height={24}
                    alt="Coin Img"
                    className="me-[5px]"
                  />
                  {/* {
                    !datacurrnecies ?
                      <Image
                        src="/1.png"
                        width={24}
                        height={24}
                        alt="Coin Img"
                        className="me-[5px]"
                      />
                      :
                      <Image
                        src={datacurrnecies[0].image}
                        width={24}
                        height={24}
                        alt="Coin Img"
                        className="me-[5px]"
                      />
                  } */}


                  <div className="font-bold text-[18px] text-black capitalize">
                    {
                      !datacurrnecies ? "-"
                        : datacurrnecies[0].name
                    }
                    <span className="font-light ms-[5px] text-[12px] uppercase">
                      {
                        !datacurrnecies ? "-"
                          : datacurrnecies[0].symbol
                      }
                    </span>
                  </div>

                </div>

                <div className="flex items-center">
                  <Button onClick={handleFav} isIconOnly size="sm" className="flex items-center text-[16px] ml-[5px] rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]">
                    {/* <FaRegStar /> */}

                    {liked ?
                      (<FaStar className="text-[#F5B97F]" />)
                      :
                      (<FaRegStar className="text-[#808A9D]" />)
                    }
                  </Button>

                  <Button isIconOnly size="sm" className="flex items-center text-[16px] ml-[5px] text-[#808A9D] rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]">
                    <IoShareSocialOutline />
                  </Button>
                </div>

                <div className="w-full flex flex-wrap items-center mt-[10px]">
                  <div className="font-bold text-black text-[32px] me-[5px]">
                    {
                      !data ? 0
                        : data[ids][vs_currencies].toLocaleString()
                    }

                    {/* $39,256.34 */}
                  </div>
                  <span className="flex items-center text-[#16c784] text-[14px]">
                    {/* <FaCaretUp /> 3.16% (1d) */}
                    {/* <FaCaretUp /> {data[ids].usd_24h_change.toFixed(2)} (1d) */}
                    <FaCaretUp />
                    {
                      !data ? 0
                        : data[ids].usd_24h_change.toFixed(2)
                    }%
                    (1d)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] mt-[20px]">
              <div>
                {/* btn add to watchlist start */}
                <div onClick={handleFav} className="hover:cursor-pointer">
                  {liked ?
                    (
                      <div className="flex items-center p-[8px] text-[#808A9D] rounded-[8px] bg-[#EFF2F5] relative">
                        <span className="text-[12px]">
                          In main
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                Remove from main
                              </div>
                            </div>
                          }
                        >
                          <div className={styles.btn_add}>
                            <FiMinus />
                          </div>
                        </Tooltip>
                        {/* end */}

                      </div>
                    )
                    :
                    (
                      <div className="flex items-center p-[8px] text-[#808A9D] rounded-[8px] bg-[#EFF2F5] relative">
                        <FaRegStar />
                        <span className="text-[12px] ms-[5px]">
                          Add to watchlist
                        </span>

                        <div className={styles.btn_add}>
                          <FiPlus />
                        </div>
                      </div>
                    )
                  }

                </div>
                {/* btn add to watchlist end */}

                {/* btn track in port start */}
                <Tooltip
                  showArrow
                  placement="right"
                  classNames={{
                    base: [
                      // arrow color
                      "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                    ],
                    content: [
                      "py-2 px-4 rounded-[8px] shadow-none",
                      "text-black bg-white",
                    ],
                  }}
                  content={
                    <div>
                      <div className="text-center">
                        <div className="font-bold text-black">Log in to track portfolio</div>
                        <Link href="" className="w-[100%] h-[32px] mt-[10px] bg-[#3861fb] hover:bg-[rgba(56,97,251,0.9)] transition-all duration-[.3s] px-[8px] rounded-[8px] flex items-center justify-center">
                          <span className="text-[12px] text-white font-bold text-nowrap">
                            Log In
                          </span>
                        </Link>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center p-[8px] mt-[10px] text-[#808A9D] rounded-[8px] bg-[#EFF2F5] relative">
                    <AiOutlinePieChart />
                    <span className="text-[12px] ms-[5px]">
                      Track in portfolio
                    </span>

                    <div className={styles.btn_add}>
                      <FiPlus />
                    </div>
                  </div>
                </Tooltip>
                {/* btn track in port end */}
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                  {/* market cap start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Market cap
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Market cap = Current price x Circulating supply
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  More about market cap
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="flex items-center text-[#16c784] me-[10px]">
                          <FaCaretUp />
                          {/* 1.44% */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].market_cap_change_percentage_24h.toFixed(2)
                          }%
                        </span>

                        <span className="font-medium text-black">
                          {/* $814,213,436,624 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].market_cap.toLocaleString()
                          }
                        </span>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={100} className="max-w-md" />

                      {/* start */}
                      <Tooltip
                        showArrow
                        placement="right"
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
                          <div className="">
                            <div className="text-[11px]">
                              Ranked 1st out of all 8,750 active cryptocurrencies listed on CoinMarketCap.
                            </div>
                          </div>
                        }
                      >
                        <div className="flex items-center px-[5px] text-[#808A9D] rounded-[4px] bg-[#EFF2F5] relative">

                          <span className="text-[11px]">
                            #1
                          </span>
                        </div>
                      </Tooltip>
                      {/* end */}
                    </div>
                  </div>
                  {/* market cap end */}

                  {/* volume (24h) start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Volume (24h)
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                A measure of how much of a cryptocurrency was traded in the last 24 hours.
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  Read More
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="flex items-center text-[#EA3943] me-[10px]">
                          <FaCaretDown />
                          {/* 1.44% */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].price_change_percentage_24h.toFixed(2)
                          }%
                        </span>

                        <span className="font-medium text-black">
                          {/* $814,213,436,624 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].total_volume.toLocaleString()
                          }
                        </span>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />

                      {/* start */}
                      <Tooltip
                        showArrow
                        placement="right"
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
                          <div className="">
                            <div className="text-[11px]">
                              Ranked 2nd by volume (24h) out of all 8,750 active cryptocurrencies listed on CoinMarketCap.
                            </div>
                          </div>
                        }
                      >

                        <div className="flex items-center px-[5px] text-[#808A9D] rounded-[4px] bg-[#EFF2F5] relative">

                          <span className="text-[11px]">
                            #2
                          </span>
                        </div>
                      </Tooltip>
                      {/* end */}
                    </div>
                  </div>
                  {/* volume (24h) end */}

                  {/* volume/market cap start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Volume/Market cap (24h)
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                Indicator of liquidity. The higher the ratio, the more liquid the cryptocurrency is, which should make it easier for it to be bought/sold on an exchange close to its value.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Cryptocurrencies with a low ratio are less liquid and most likely present less stable markets.
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="font-medium text-black">
                          {/* 2.54% */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].market_cap_change_percentage_24h.toFixed(2)
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* volume/market cap end */}

                  {/* circulating supply start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Circulating supply
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px] text-[#000] font-bold flex items-center">
                                <MdVerified className="text-[#3861fb] me-[5px] text-[16px]" /> Verified Data
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                The CoinMarketCap team has verified the project's circulating supply.
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <MdVerified className="text-[#3861fb] ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  Read More
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="font-medium text-black">
                          {/* 19,603,556 BTC */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].circulating_supply.toLocaleString()
                          }
                          <span className="uppercase ms-[3px]">
                            {
                              !datacurrnecies ? 0
                                : datacurrnecies[0].symbol
                            }
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />

                      <div className="flex items-center text-[#808A9D] rounded-[4px] relative">

                        <span className="text-[11px]">
                          93.35%
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* circulating supply end */}

                  {/* total supply start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Total supply
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                Total supply = Total coins created - coins that have been burned (if any) It is comparable to outstanding shares in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                If the project did not submit this data nor was it verified by CoinMarketCap, total supply shows “--”.
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="font-medium text-black">
                          {/* 19,603,556 BTC */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].total_supply.toLocaleString()
                          }
                          <span className="uppercase ms-[3px]">
                            {
                              !datacurrnecies ? 0
                                : datacurrnecies[0].symbol
                            }
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* total supply end */}

                  {/* max. supply start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Max. supply
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                If the project did not submit this data nor was it verified by CoinMarketCap, max. supply shows "--".
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="font-medium text-black">
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].max_supply.toLocaleString()
                          }
                          <span className="uppercase ms-[3px]">
                            {
                              !datacurrnecies ? 0
                                : datacurrnecies[0].symbol
                            }
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* max. supply end */}

                  {/* fully diluted market cap start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[12px]">
                        <span className="overflow-hidden text-ellipsis">
                          Fully diluted market cap
                        </span>

                        {/* start */}
                        <Tooltip
                          showArrow
                          placement="right"
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
                            <div className="">
                              <div className="text-[11px]">
                                The market cap if the max supply was in circulation.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows - -.
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>

                      <div className="flex items-center text-[12px]">
                        <span className="font-medium text-black">
                          {/* $873,713,913,833 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].fully_diluted_valuation.toLocaleString()
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* fully diluted market cap end */}
                </div>

                <div className="flex flex-col gap-[24px]">
                  {/* official links start */}
                  <div>
                    <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                      Official links
                    </div>

                    <div className="flex flex-wrap gap-[8px] mt-[10px]">
                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <TbWorld /> <span className="ms-[5px]">Website</span>
                      </Link>

                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <IoDocumentOutline /> <span className="ms-[5px]">Whitepaper</span>
                      </Link>

                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <IoLogoGithub /> <span className="ms-[5px]">GitHub</span>
                      </Link>
                    </div>
                  </div>
                  {/* official links end */}

                  {/* socials start */}
                  <div>
                    <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                      Socials
                    </div>

                    <div className="flex flex-wrap gap-[8px] mt-[10px]">
                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <IoLogoReddit /> <span className="ms-[5px]">Reddit</span>
                      </Link>
                    </div>
                  </div>
                  {/* socials end */}

                  {/* rating start */}
                  <div>
                    <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                      Rating  ·<span className="text-[11px] text-[#616E85] font-light ms-[5px]">Based on 2 institutional ratings</span>
                    </div>

                    <div className="flex items-center text-[12px] mt-[10px]">
                      <span className="overflow-hidden text-ellipsis">
                        4.8
                      </span>

                      <div className="flex items-center mx-[5px]">
                        <FaStar className="text-[#F5B97F]" />
                        <FaStar className="text-[#F5B97F]" />
                        <FaStar className="text-[#F5B97F]" />
                        <FaStar className="text-[#F5B97F]" />
                        <FaStar className="text-[#F5B97F]" />
                      </div>

                      {/* start */}
                      <Tooltip
                        showArrow
                        placement="right"
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
                          <div className="">
                            <div className="flex items-center justify-between">
                              <div className="">
                                <Link href="" className="font-bold text-[13px] text-black flex items-center">Cyberscope <RiShareBoxLine /></Link>
                                <div className="text-[11px]">21/1/2567</div>
                              </div>

                              <div className="flex items-center text-[12px]">
                                <span className="overflow-hidden text-ellipsis">
                                  4.8
                                </span>

                                <div className="flex items-center mx-[5px]">
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-[10px]">
                              <div className="">
                                <Link href="" className="font-bold text-[13px] text-black flex items-center">Cyberscope <RiShareBoxLine /></Link>
                                <div className="text-[11px]">21/1/2567</div>
                              </div>

                              <div className="flex items-center text-[12px]">
                                <span className="overflow-hidden text-ellipsis">
                                  4.8
                                </span>

                                <div className="flex items-center mx-[5px]">
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                  <FaStar className="text-[#F5B97F]" />
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] mt-[10px]">
                              The aggregate rating is a simple average of ratings collected from the sources shown above. It does not represent the opinion of CoinMarketCap and we cannot guarantee the quality or suitability of the projects based solely on the aggregate rating. Please use your own judgment when evaluating each token.
                            </div>
                            <div className="">
                              <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[11px]">
                                Read More
                              </Link>
                            </div>
                          </div>
                        }
                      >

                        <div>
                          <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                        </div>
                      </Tooltip>
                      {/* end */}
                    </div>
                  </div>
                  {/* rating end */}

                  {/* network information start */}
                  <div>
                    <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                      Network information
                    </div>

                    <div className="flex flex-wrap gap-[8px] mt-[10px]">
                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <IoSearch /> <span className="mx-[5px]">Chain explorers</span> <MdOutlineKeyboardArrowDown />
                      </Link>

                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <IoWalletOutline /> <span className="mx-[5px]">Supported wallets</span> <MdOutlineKeyboardArrowDown />
                      </Link>
                    </div>
                  </div>
                  {/* network information end */}

                  {/* UCID start */}
                  <div>
                    <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                      UCID
                    </div>

                    <div className="flex flex-wrap items-center gap-[8px] mt-[10px]">
                      <Link href="" target="_blank" className="text-[12px] font-medium flex items-center px-[8px] py-[2px] text-[#0D1421] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <span className="me-[5px]">1</span> <IoCopyOutline />
                      </Link>

                      {/* start */}
                      <Tooltip
                        showArrow
                        placement="right"
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
                          <div className="">
                            <div className="text-[11px]">
                              The Unified Cryptoasset ID (UCID) assigns a unique ID to each cryptoasset to minimize any confusion that may arise from assets that share identical tickers/symbols. The goal is to build a unified registry so as to work towards harmonized API standards and interoperability within this space.
                            </div>
                            <div className="text-[11px] mt-[10px]">
                              The UCID is equivalent to the CoinMarketCap ID in our API.
                            </div>
                            <div className="mt-[10px]">
                              <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                More info about UCID
                              </Link>
                            </div>
                            <div className="mt-[10px]">
                              <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                More about the CoinMarketCap API
                              </Link>
                            </div>
                          </div>
                        }
                      >

                        <div>
                          <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                        </div>
                      </Tooltip>
                      {/* end */}
                    </div>
                  </div>
                  {/* UCID end */}
                </div>

                {/* converter start */}
                <div>
                  <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                    BTC to USD Converter
                  </div>

                  <div className={styles.converter_wrap}>
                    <div className="flex items-center justify-between bg-white px-[8px] py-[5px] rounded-l-md text-[12px]">
                      <span className="w-[30%]">
                        BTC
                      </span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[65%] text-end focus:outline-none focus:shadow-none border-0 text-[14px] p-0"
                        // value="1"
                        placeholder="0"
                      />
                    </div>

                    <div className="flex items-center justify-between bg-white px-[8px] py-[5px] rounded-r-md text-[12px]">
                      <span className="w-[30%]">
                        USD
                      </span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[65%] text-end focus:outline-none focus:shadow-none border-0 text-[14px] p-0"
                        // value="1"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                {/* converter end */}

                <div className="flex flex-col gap-[16px]">
                  {/* price performance start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-medium text-[#0D1421]">
                        Price performance
                      </div>

                      <Link href="" target="_blank" className="text-[11px] font-medium flex items-center px-[8px] py-[2px] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                        <span className="me-[5px]">24h</span>  <MdOutlineKeyboardArrowDown />
                      </Link>
                    </div>
                  </div>
                  {/* price performance end */}

                  {/* Low High start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] block">
                        <div className="overflow-hidden text-ellipsis">
                          Low
                        </div>
                        <div className="font-medium text-black">
                          {/* $41,535.84 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].low_24h.toLocaleString()
                          }
                        </div>
                      </div>

                      <div className="text-[12px] block text-right">
                        <div className="overflow-hidden text-ellipsis">
                          High
                        </div>
                        <div className="font-medium text-black">
                          {/* $41,877.89 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].high_24h.toLocaleString()
                          }
                        </div>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />
                    </div>
                  </div>
                  {/* Low High end */}

                  {/* all-time high start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] block">
                        <div className="font-medium">
                          All-time high
                        </div>
                        <div className="text-[11px]">
                          Nov 10, 2021 (2 years ago)
                        </div>
                      </div>

                      <div className="text-[12px] block text-right">
                        <div className="font-medium text-black">
                          {/* $68,789.63 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].ath.toLocaleString()
                          }
                        </div>
                        <div className="text-[11px] text-[#EA3943]">
                          {/* -39.25% */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].ath_change_percentage.toFixed(2)
                          }%
                        </div>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />
                    </div>
                  </div>
                  {/* all-time high end */}

                  {/* all-time low start */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] block">
                        <div className="font-medium">
                          All-time low
                        </div>
                        <div className="text-[11px]">
                          Jul 15, 2010 (14 years ago)
                        </div>
                      </div>

                      <div className="text-[12px] block text-right">
                        <div className="font-medium text-black">
                          {/* $0.04865 */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].atl.toLocaleString()
                          }
                        </div>
                        <div className="text-[11px] text-[#16C784]">
                          {/* +85903670.01% */}
                          {
                            !datacurrnecies ? 0
                              : datacurrnecies[0].atl_change_percentage.toFixed(2)
                          }%
                        </div>
                      </div>
                    </div>

                    <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                      <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />
                    </div>
                  </div>
                  {/* all-time low end */}

                  <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] font-medium text-[12px]">
                    See historical data
                  </Link>
                </div>

                {/* popularity start */}
                <div>
                  <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                    Popularity
                  </div>

                  <div className="flex flex-col gap-[16px] mt-[10px]">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[12px]">
                          <span className="overflow-hidden text-ellipsis">
                            In watchlists
                          </span>

                          {/* start */}
                          <Tooltip
                            showArrow
                            placement="right"
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
                              <div className="">
                                <div className="text-[11px]">
                                  Number of watchlists on CoinMarketCap that include this cryptocurrency
                                </div>
                              </div>
                            }
                          >

                            <div>
                              <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                            </div>
                          </Tooltip>
                          {/* end */}
                        </div>

                        <div className="flex items-center text-[12px]">
                          <span className="font-medium text-black">
                            4,450,086x
                          </span>
                        </div>
                      </div>

                      <div className="w-full gap-[12px] mt-[2px] flex items-center justify-between">
                        <Progress color="default" size="sm" aria-label="Loading..." value={30} className="max-w-md" />

                        <span className="text-[11px] text-[#808A9D] flex-shrink-0">
                          28th / 8.8K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* popularity end */}

                {/* tags start */}
                <div>
                  <div className="text-[12px] font-medium text-[#0D1421] flex items-center">
                    Tags
                  </div>

                  <div className="flex flex-wrap gap-[8px] mt-[10px]">
                    <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                      <span className="">Mineable</span>
                    </Link>

                    <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                      <span className="">PoW</span>
                    </Link>

                    <Link href="" target="_blank" className="text-[12px] font-normal flex items-center px-[8px] py-[2px] text-[#616E85] rounded-[8px] bg-[#EFF2F5] hover:bg-[#CFD6E4] transition-all duration-[.3s]">
                      <span className="">SHA-256</span>
                    </Link>

                    <ModalTags />

                    {/* <Button onPress={onOpen}>Open Modal</Button> */}
                  </div>
                </div>
                {/* tags end */}

                <div className="px-[8px] py-[16px] bg-[#F8FAFD] font-bold text-[12px] rounded-[8px] flex flex-wrap items-center justify-between">
                  <span className="text-[#0D1421]">
                    Do you own this project?
                  </span>

                  <Link href="" className="flex items-center text-[#3861fb] hover:text-[#5b79e3]">
                    <LuPen className="me-[5px]" /> Update Token Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box_tabs_menu}>
          <ScrollShadow
            hideScrollBar
            offset={100}
            orientation="horizontal"
            className="max-w-[100%] min-h-[50px] flex items-end text-[#0D1421] font-medium"
          >
            <Tabs key="" variant="underlined" color="primary" aria-label="Tabs variants" className="mb-[-4px]">
              <Tab key="Chart" title="Chart" />
              {/* <Tab key="Community" title="Community" /> */}
              <Tab key="Markets" title="Markets" />
              <Tab key="News" title="News" />
              <Tab key="About" title="About" />
              <Tab key="Analytics" title="Analytics" />
            </Tabs>
          </ScrollShadow>
        </div>

        <div className={styles.box_chart}>
          <div className="block lg:hidden relative lg:sticky top-[-20px] left-0 z-10 bg-white p-[20px] m-[-20px]">
            <div className="flex flex-wrap items-center justify-between mb-0">
              <div className="flex items-center">
                <Image
                  src="/1.png"
                  width={24}
                  height={24}
                  alt="Coin Img"
                  className="me-[5px]"
                />
                {/* {
                    !datacurrnecies ?
                      <Image
                        src="/1.png"
                        width={24}
                        height={24}
                        alt="Coin Img"
                        className="me-[5px]"
                      />
                      :
                      <Image
                        src={datacurrnecies[0].image}
                        width={24}
                        height={24}
                        alt="Coin Img"
                        className="me-[5px]"
                      />
                  } */}


                <div className="font-bold text-[18px] text-black capitalize">
                  {
                    !datacurrnecies ? "-"
                      : datacurrnecies[0].name
                  }
                  <span className="font-light ms-[5px] text-[12px] uppercase">
                    {
                      !datacurrnecies ? "-"
                        : datacurrnecies[0].symbol
                    }
                  </span>
                </div>

              </div>

              <div className="flex items-center">
                <Button onClick={handleFav} isIconOnly size="sm" className="flex items-center text-[16px] ml-[5px] rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]">
                  {/* <FaRegStar /> */}

                  {liked ?
                    (<FaStar className="text-[#F5B97F]" />)
                    :
                    (<FaRegStar className="text-[#808A9D]" />)
                  }
                </Button>

                <Button isIconOnly size="sm" className="flex items-center text-[16px] ml-[5px] text-[#808A9D] rounded-[8px] bg-[#EFF2F5] transition-all duration-[.3s]">
                  <IoShareSocialOutline />
                </Button>
              </div>

              <div className="w-full flex flex-wrap items-center mt-[10px]">
                <div className="font-bold text-black text-[32px] me-[5px]">
                  {
                    !data ? 0
                      : data[ids][vs_currencies].toLocaleString()
                  }

                  {/* $39,256.34 */}
                </div>
                <span className="flex items-center text-[#16c784] text-[14px]">
                  {/* <FaCaretUp /> 3.16% (1d) */}
                  {/* <FaCaretUp /> {data[ids].usd_24h_change.toFixed(2)} (1d) */}
                  <FaCaretUp />
                  {
                    !data ? 0
                      : data[ids].usd_24h_change.toFixed(2)
                  }%
                  (1d)
                </span>
              </div>
            </div>
          </div>

          <Charts />
        </div>

        <div className={styles.box_community}>
          <div className="relative">
            <div className="p-[20px]">
              <div className="flex flex-wrap items-center justify-between relative mb-0 bg-white">
                <div className="flex items-center">
                  <Image
                    src="/1.png"
                    width={34}
                    height={34}
                    alt="Coin Img"
                    className="me-[5px]"
                  />

                  <div className="flex flex-wrap">
                    <div className="w-full flex items-center font-bold text-[14px] text-black">
                      Bitcoin <MdVerified className="text-[#3861fb] ms-[5px]" />
                    </div>
                    <div className="w-full font-light text-[11px]">909K Followers</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Button size="sm" color="primary" startContent={<FiPlus />}>
                    Follow
                  </Button>
                </div>

                <div className="w-full px-[8px] py-[16px] font-bold text-[12px] rounded-[8px] flex flex-wrap items-center justify-between">
                  <span className="text-[#0D1421] flex items-center">
                    <TbSpeakerphone className="me-[5px] text-[14px] text-[#808a9d]" /> Project’s announcements
                  </span>
                </div>
              </div>

              <div className="bg-[#f8fafd] rounded-[8px] p-[16px]">
                <div className="flex items-center rounded-[8px] relative overflow-hidden border-[1px] border-solid border-[#CFD6E4]">
                  <Image
                    src="/2.png"
                    width={84}
                    height={84}
                    alt="News Img"
                  // className="me-[5px]"
                  />

                  <div className="flex flex-wrap p-[10px] w-[100%] h-[84px]">
                    <div className={styles.txt_nh}>
                      Bitcoin Halving 2024
                    </div>
                    <div className={styles.txt_n}>
                      Use our Bitcoin halving countdown to see the estimated date for 2024. Learn about the Bitcoin halving cycle, the previous dates, and the block reward schedule.
                    </div>
                  </div>

                  <div className={styles.wrap_link}>
                    <LuLink />
                    <span className="ms-[3px]">Link</span>
                  </div>
                </div>

                <div className="flex flex-wrap mt-[10px] gap-[4px] gap-y-[4px]">
                  <Link href="" className={styles.item_sc}>
                    <div className={styles.icon_sc}>
                      <AiOutlineLike />
                    </div>
                    <span className="text-[12px]">
                      2.9k
                    </span>
                  </Link>

                  <Link href="" className={styles.item_sc}>
                    <div className={styles.icon_sc}>
                      <FcLike />
                    </div>
                    <span className="text-[12px]">
                      9k
                    </span>
                  </Link>

                  <Link href="" className={styles.item_sc}>
                    <div className={styles.icon_sc}>
                      <FcOnlineSupport />
                    </div>
                    <span className="text-[12px]">
                      1k
                    </span>
                  </Link>

                  <Link href="" className={styles.item_sc}>
                    <div className={styles.icon_sc}>
                      <FcReadingEbook />
                    </div>
                    <span className="text-[12px]">
                      872
                    </span>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-between mt-[10px] gap-[4px] gap-y-[4px]">
                  <Link href="" className={styles.item_cm}>
                    <div className={styles.icon_cm}>
                      <IoEyeOutline />
                    </div>
                    <span className="text-[14px] ms-[5px]">
                      359.9k
                    </span>
                  </Link>

                  <Link href="" className={styles.item_cm}>
                    <div className={styles.icon_cm}>
                      <LiaCommentDots />
                    </div>
                    <span className="text-[14px] ms-[5px]">
                      29
                    </span>
                  </Link>

                  <Link href="" className={styles.item_cm}>
                    <div className={styles.icon_cm}>
                      <LiaRetweetSolid />
                    </div>
                    <span className="text-[14px] ms-[5px]">
                      8
                    </span>
                  </Link>

                  <Link href="" className={styles.item_cm}>
                    <div className={styles.icon_cm}>
                      <PiUserCirclePlusLight />
                    </div>
                    <span className="text-[14px] ms-[3px]">
                      708
                    </span>
                  </Link>

                  <Link href="" className={styles.item_cm}>
                    <div className={styles.icon_cm}>
                      <BsThreeDots />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-b-[1px] border-solid border-[#EFF2F5]"></div>

            <News />
          </div>
        </div>

        <div className={styles.box_markets}>
          <div className="flex flex-wrap justify-between items-center gap-y-[24px] mt-[64px] mb-[24px]">
            <div className="font-bold text-[#0D1421] text-lg text-[25px]">
              Bitcoin markets
            </div>

            <div className="w-full lg:w-[auto] gap-[10px] flex flex-wrap items-center">
              <Tabs aria-label="Options" size="sm">
                <Tab key="All" title="ALL" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                <Tab key="Cex" title="CEX" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                <Tab key="Dex" title="DEX" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
              </Tabs>

              <Tabs aria-label="Options" size="sm">
                <Tab key="Spot" title="Spot" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                <Tab key="Perpetual" title="Perpetual" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                <Tab key="Futures" title="Futures" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
              </Tabs>

              <Dropdown
                showArrow
                classNames={{
                  base: [
                    // arrow color
                    "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                  ],
                  content: [
                    "rounded-[8px] shadow-none",
                    "bg-white min-w-[120px]",
                  ],
                }}
              >
                <DropdownTrigger>
                  <Button
                    color="light"
                    variant="bordered"
                    className="capitalize text-[12px] px-[10px] min-w-[60px] h-[36px]"
                  >
                    {selectedValue} <IoIosArrowDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="All_pairs" className="text-[12px] text-[#0D1421] font-bold">
                    All pairs
                  </DropdownItem>
                  <DropdownItem key="FDUSD" className="text-[12px] text-[#0D1421] font-bold">
                    FDUSD
                  </DropdownItem>
                  <DropdownItem key="USDT" className="text-[12px] text-[#0D1421] font-bold">
                    USDT
                  </DropdownItem>
                  <DropdownItem key="USD" className="text-[12px] text-[#0D1421] font-bold">
                    USD
                  </DropdownItem>
                  <DropdownItem key="BTC" className="text-[12px] text-[#0D1421] font-bold">
                    BTC
                  </DropdownItem>
                  <DropdownItem key="USDC" className="text-[12px] text-[#0D1421] font-bold">
                    USDC
                  </DropdownItem>
                  <DropdownItem key="EUR" className="text-[12px] text-[#0D1421] font-bold">
                    EUR
                  </DropdownItem>
                  <DropdownItem key="TUSD" className="text-[12px] text-[#0D1421] font-bold">
                    TUSD
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <ScrollShadow hideScrollBar offset={100} orientation="horizontal" className="w-[100%] min-h-[100%]">
            <div>
              <table className={styles.table_market}>
                <thead>
                  <tr>
                    <th className="min-w-[42px] sticky left-0 bg-white z-10">
                      <div className="flex flex-row items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        #
                      </div>
                    </th>
                    <th className="min-w-[104px] sticky left-[42px] bg-white z-10">
                      <div className="flex flex-row items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Exchange
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Pair
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Price
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        +2% Depth

                        {/* start */}
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
                            <div className="">
                              <div className="text-[11px]">
                                The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Market cap = Current price x Circulating supply
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  More about market cap
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        -2% Depth

                        {/* start */}
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
                            <div className="">
                              <div className="text-[11px]">
                                The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Market cap = Current price x Circulating supply
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  More about market cap
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Volume (24h)
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Volume %
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Confidence

                        {/* start */}
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
                            <div className="">
                              <div className="text-[11px]">
                                The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Market cap = Current price x Circulating supply
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  More about market cap
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Liquidity Score

                        {/* start */}
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
                            <div className="">
                              <div className="text-[11px]">
                                The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
                              </div>
                              <div className="text-[11px] mt-[10px]">
                                Market cap = Current price x Circulating supply
                              </div>
                              <div className="mt-[10px]">
                                <Link href="" className="text-[#3861fb] hover:text-[#5b79e3] text-[14px]">
                                  More about market cap
                                </Link>
                              </div>
                            </div>
                          }
                        >

                          <div>
                            <AiOutlineExclamationCircle className="ms-[2px] text-[14px]" />
                          </div>
                        </Tooltip>
                        {/* end */}
                      </div>
                    </th>
                    <th>
                      <div className="flex flex-row justify-end items-center whitespace-nowrap font-medium text-[12px] text-[#0D1421]">
                        Updated
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sticky left-0 bg-white z-10">
                      <div className="whitespace-nowrap font-regular text-[14px]">
                        1
                      </div>
                    </td>
                    <td className="sticky left-[42px] bg-white z-10">
                      <div className="flex items-center">
                        <Image width={20} height={20} src="/1.png" alt="coin" />

                        <span className="whitespace-initial ms-[5px] font-medium text-[14px] text-[#0D1421]">
                          Binance
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <Link href="" className="whitespace-nowrap ms-[5px] font-regular text-[14px] text-[#3861FB]">
                          BTC/FDUSD
                        </Link>

                        <RiShareBoxLine className="text-[12px]" />
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap font-regular text-[14px]">
                        $40,254.70
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        $8,500,025
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        $3,684,240
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        $3,684,240
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        11.65%
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap w-max ml-[auto] font-regular text-[14px] text-white bg-[#16C784] rounded-[20px] px-[8px]">
                        High
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        942
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap text-right font-regular text-[14px]">
                        6 hours ago
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollShadow>

          <div className="flex items-center justify-between gap-[10px] mt-[24px]">
            <span className="text-[12px]">
              Showing 1 - 10 out of 6000
            </span>

            <Pagination showControls total={10} initialPage={1} variant="light" size="sm" />

            <div className="flex items-center">
              <span className="text-[12px]">
                Show rows
              </span>

              <Dropdown
                showArrow
                classNames={{
                  base: [
                    // arrow color
                    "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                  ],
                  content: [
                    "rounded-[8px] shadow-none",
                    "bg-white min-w-[90px]",
                  ],
                }}
              >
                <DropdownTrigger>
                  <Button
                    color="light"
                    variant="bordered"
                    className="capitalize text-[12px] px-[10px] min-w-[50px] h-[32px] mx-[10px]"
                  >
                    {selectedValueMarkets} <IoIosArrowDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeysMarkets}
                  onSelectionChange={setSelectedKeysMarkets}
                >
                  <DropdownItem key="10" className="text-[12px] text-[#0D1421] font-bold">
                    10
                  </DropdownItem>
                  <DropdownItem key="20" className="text-[12px] text-[#0D1421] font-bold">
                    20
                  </DropdownItem>
                  <DropdownItem key="50" className="text-[12px] text-[#0D1421] font-bold">
                    50
                  </DropdownItem>
                  <DropdownItem key="100" className="text-[12px] text-[#0D1421] font-bold">
                    100
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Button size="sm" className="bg-[#EFF2F5]">Show full width</Button>
            </div>
          </div>

          <div className="text-[11px] text-[#A6B0C3] mt-[24px]">
            <p>Disclaimer: This page may contain affiliate links. CoinMarketCap may be compensated if you visit any affiliate links and you take certain actions such as signing up and transacting with these affiliate platforms. Please refer to <a href="/affiliate-disclosure/" className="underline text-[rgba(16,112,224,0.8)]">Affiliate Disclosure</a></p>
          </div>
        </div>

        <div className={styles.box_news}>
          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Bitcoin news
          </div>

          <ul className={styles.list_news}>
            <li>
              <div className="text-[12px] text-[#616E85]">
                2 hours ago
              </div>

              <div className="flex items-center mt-[14px]">
                <div className="mr-[14px] md:mr-[64px]">
                  <div className={styles.txt_h}>
                    Kelexo (KLXO) Presale Runs Wild, as Celestia (TIA) and Ethereum (ETH) Whales Snap Up Early Positions
                  </div>
                  <span className={styles.txt_desc}>
                    Altcoins faced substantial corrections across the board in the past 24 hours, as the market experienced a flash crash which saw Bitcoin (BTC) prices fall below $38,800. However, hope springs eternal in the world of crypto—and presales offer plenty of parabolic growth potential ah...
                  </span>

                  <div className={styles.txt_f}>
                    COINTURK NEWS
                  </div>
                </div>

                <div className="min-w-[100px] md:min-w-[200px] min-h-[115px] rounded-[8px] overflow-hidden bg-[url('/n1.png')] bg-cover bg-no-repeat bg-center"></div>
              </div>
            </li>

            <li>
              <div className="text-[12px] text-[#616E85]">
                2 hours ago
              </div>

              <div className="flex items-center mt-[14px]">
                <div className="mr-[14px] md:mr-[64px]">
                  <div className={styles.txt_h}>
                    Kelexo (KLXO) Presale Runs Wild, as Celestia (TIA) and Ethereum (ETH) Whales Snap Up Early Positions
                  </div>
                  <span className={styles.txt_desc}>
                    Altcoins faced substantial corrections across the board in the past 24 hours, as the market experienced a flash crash which saw Bitcoin (BTC) prices fall below $38,800. However, hope springs eternal in the world of crypto—and presales offer plenty of parabolic growth potential ah...
                  </span>

                  <div className={styles.txt_f}>
                    COINTURK NEWS
                  </div>
                </div>

                <div className="min-w-[100px] md:min-w-[200px] min-h-[115px] rounded-[8px] overflow-hidden bg-[url('/n1.png')] bg-cover bg-no-repeat bg-center"></div>
              </div>
            </li>
          </ul>

          <div className="w-full flex items-center justify-center mt-[24px]">
            <Button color="default">
              See More
            </Button>
          </div>
        </div>

        <div className={styles.box_about}>
          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            About Bitcoin
          </div>

          <AboutAccordion />
        </div>

        <div className={styles.box_team}>
          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Team
          </div>

          {/* Individuals Team start */}
          <div>
            <h4 className="font-semibold text-[#0D1421] text-md">
              Individuals
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[16px]">
              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Giel van Schijndel</div>
                  <div className="text-[12px]">Bitcoin Core Contributor</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Johnson Lau</div>
                  <div className="text-[12px]">Bitcoin Core Contributor</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Daniel Folkinshteyn</div>
                  <div className="text-[12px]">Bitcoin Core Developer</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">João Barbosa</div>
                  <div className="text-[12px]">Bitcoin Core Developer</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Giel van Schijndel</div>
                  <div className="text-[12px]">Bitcoin Core Contributor</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Johnson Lau</div>
                  <div className="text-[12px]">Bitcoin Core Contributor</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Daniel Folkinshteyn</div>
                  <div className="text-[12px]">Bitcoin Core Developer</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">João Barbosa</div>
                  <div className="text-[12px]">Bitcoin Core Developer</div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center mt-[24px]">
              <Button color="default">
                Show all
              </Button>
            </div>
          </div>
          {/* Individuals Team end */}


          {/* Organizations Team start */}
          <div className="mt-[24px]">
            <h4 className="font-semibold text-[#0D1421] text-md">
              Organizations
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[16px]">
              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/2e1e5eb2c2956149bc7eed7cf637a8ac.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">MIT Digital Currency Initiative</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/2760dfbfbe75ad53f2ad1563de62c466.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Blockstream</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/fc238c822abe5c9c34aa07997cb017bb.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Chaincode Labs</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/5ad2f76c724bb0bfb3a402fab9f0bd2f.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Square Crypto</div>
                </div>
              </div>
            </div>
          </div>
          {/* Organizations Team end */}

          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Investors
          </div>

          {/* Investors start */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[16px]">
              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/89c07eed54e069f339f51efcb8436a74.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Delphi Digital</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/09f44f9148073b9ad1b1451dbcf2d8e0.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Jump Capital</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/10ac4aadb30cbe15bdf10f92ac4a3b2a.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Paradigm</div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <Avatar size="md" src="https://assets.dapp.review/cmc/logo/9e85fb63321e89721ca532508abf5f83.jpg" />

                <div className="ms-[10px]">
                  <div className="text-sm font-medium text-[#0D1421]">Outlier Ventures</div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center mt-[24px]">
              <Button color="default">
                Show all
              </Button>
            </div>
          </div>
          {/* Investors end */}
        </div>

        <div className={styles.box_allocation}>
          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Allocation
          </div>

          <div className="bg-[#F8FAFD] rounded-[8px] p-[24px]">
            <DoughnutChart />
          </div>
        </div>

        <div className={styles.box_footer}>
          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            People also watch
          </div>

          <AlsoWatch />

          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Trending
          </div>

          <AlsoWatch />

          <div className="font-bold text-[#0D1421] text-lg mt-[64px] mb-[24px] text-[25px]">
            Bitcoin Price Live Data
          </div>

          <div className={styles.text_desc}>
            <p>The live <strong>Bitcoin price today</strong> is $39,812.28 USD with a 24-hour trading volume of $23,526,544,682 USD. We update our BTC to USD price in real-time. Bitcoin is up 1.43% in the last 24 hours. The current CoinMarketCap ranking is #1, with a live market cap of $780,613,298,584 USD. It has a circulating supply of 19,607,350 BTC coins and a max. supply of 21,000,000 BTC coins.</p><p><span>If you would like to know where to buy Bitcoin at the current rate, the top cryptocurrency exchanges for trading in Bitcoin stock are currently <a href="/exchanges/binance/">Binance</a>, <a href="/exchanges/bluebit/">BlueBit</a>, <a href="/exchanges/ueex/">UEEx</a>, <a href="/exchanges/okx/">OKX</a>,  and <a href="/exchanges/bybit/">Bybit</a>.</span> You can find others listed on our <a href="/rankings/exchanges/">crypto exchanges page</a>.</p>
          </div>

          <Breadcrumbs className="py-[20px]">
            <BreadcrumbItem>
              <Link href="">Cryptocurrencies</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="">Coins</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="">Bitcoin</Link>
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>

      </div>
    </main>
  )
}
