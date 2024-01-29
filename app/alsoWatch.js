// 'use client'

import styles from "../styles/AlsoWatch.module.css"
import Image from "next/image";
import React from "react";
import {
    ScrollShadow
} from "@nextui-org/react";

import {
    FaCaretUp,
    FaCaretDown,
} from "react-icons/fa";

export default function AlsoWatch() {
    return (
        <ScrollShadow hideScrollBar size={100} orientation="horizontal" className="w-[100%] max-h-[100%]">

            <div className="flex gap-[16px] items-start w-max">
                <div className="flex flex-col gap-[8px] items-start w-[190px] bg-[#F8FAFD] rounded-[8px] p-[14px]">
                    <Image width={30} height={30} src="/1.png" alt="Coin Img" />

                    <p className="text-[14px] text-[#0D1421] font-semibold overflow-hidden text-ellipsis w-[100%]">
                        Bitcoin
                    </p>

                    <p className="text-[14px] overflow-hidden text-ellipsis w-[100%]">
                        $39,839.08
                    </p>

                    <span className="flex items-center text-[#16c784] text-[12px]">
                        <FaCaretUp /> 3.16%
                        {/* {coin.change.toFixed(2)} (1d) */}
                    </span>
                </div>

                <div className="flex flex-col gap-[8px] items-start w-[190px] bg-[#F8FAFD] rounded-[8px] p-[14px]">
                    <Image width={30} height={30} src="/1.png" alt="Coin Img" />

                    <p className="text-[14px] text-[#0D1421] font-semibold overflow-hidden text-ellipsis w-[100%]">
                        Bitcoin
                    </p>

                    <p className="text-[14px] overflow-hidden text-ellipsis w-[100%]">
                        $39,839.08
                    </p>

                    <span className="flex items-center text-[#16c784] text-[12px]">
                        <FaCaretUp /> 3.16%
                        {/* {coin.change.toFixed(2)} (1d) */}
                    </span>
                </div>

                <div className="flex flex-col gap-[8px] items-start w-[190px] bg-[#F8FAFD] rounded-[8px] p-[14px]">
                    <Image width={30} height={30} src="/1.png" alt="Coin Img" />

                    <p className="text-[14px] text-[#0D1421] font-semibold overflow-hidden text-ellipsis w-[100%]">
                        Bitcoin
                    </p>

                    <p className="text-[14px] overflow-hidden text-ellipsis w-[100%]">
                        $39,839.08
                    </p>

                    <span className="flex items-center text-[#16c784] text-[12px]">
                        <FaCaretUp /> 3.16%
                        {/* {coin.change.toFixed(2)} (1d) */}
                    </span>
                </div>

                <div className="flex flex-col gap-[8px] items-start w-[190px] bg-[#F8FAFD] rounded-[8px] p-[14px]">
                    <Image width={30} height={30} src="/1.png" alt="Coin Img" />

                    <p className="text-[14px] text-[#0D1421] font-semibold overflow-hidden text-ellipsis w-[100%]">
                        Bitcoin
                    </p>

                    <p className="text-[14px] overflow-hidden text-ellipsis w-[100%]">
                        $39,839.08
                    </p>

                    <span className="flex items-center text-[#16c784] text-[12px]">
                        <FaCaretUp /> 3.16%
                        {/* {coin.change.toFixed(2)} (1d) */}
                    </span>
                </div>

                <div className="flex flex-col gap-[8px] items-start w-[190px] bg-[#F8FAFD] rounded-[8px] p-[14px]">
                    <Image width={30} height={30} src="/1.png" alt="Coin Img" />

                    <p className="text-[14px] text-[#0D1421] font-semibold overflow-hidden text-ellipsis w-[100%]">
                        Bitcoin
                    </p>

                    <p className="text-[14px] overflow-hidden text-ellipsis w-[100%]">
                        $39,839.08
                    </p>

                    <span className="flex items-center text-[#16c784] text-[12px]">
                        <FaCaretUp /> 3.16%
                        {/* {coin.change.toFixed(2)} (1d) */}
                    </span>
                </div>
            </div>

        </ScrollShadow>
    );
}

