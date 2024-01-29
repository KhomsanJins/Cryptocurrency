'use client'

import styles from "../styles/News.module.css"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Tabs,
    Tab
} from "@nextui-org/react";

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
    IoEyeOutline
} from "react-icons/io5";
import {
    AiOutlinePieChart,
    AiOutlineExclamationCircle,
    AiOutlineLike,
} from "react-icons/ai";
import {
    MdVerified,
    MdOutlineKeyboardArrowDown
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
//   icon end

export default function News() {
    return (
        <div>
            <div className={styles.box_tabs_news}>
                <Tabs fullWidth aria-label="Options">
                    <Tab key="top" title="Top" />
                    <Tab key="latest" title="Latest" />
                </Tabs>
            </div>

            <div>
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
        </div>
    );
}

