import styles from "../styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer >
            <div className="max-w-full py-[50px]">
                <div className="px-[20px] flex flex-wrap">
                    <div className="w-[100%] xl:w-[50%]">
                        <div className={styles.logo}></div>
                    </div>

                    <div className="w-[100%] xl:w-[50%] flex flex-wrap">
                        <div className="w-[50%] md:w-[25%]">
                            <span className="font-bold text-[#000]">
                                Products
                            </span>

                            <ul className={styles.list_f_link}>
                                <li>
                                    <Link href="" target="_blank">
                                        CMC Labs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        ChatGPT Plugin
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Crypto API
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Crypto Indices
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Doodles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Sitemap
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[50%] md:w-[25%]">
                            <span className="font-bold text-[#000]">
                                Company
                            </span>

                            <ul className={styles.list_f_link}>
                                <li>
                                    <Link href="" target="_blank">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Terms of use
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Cookie preferences
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Cookie policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Community Rules
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Methodology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Careers
                                    </Link>
                                    <span className={styles.badge}>We’re hiring!</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[50%] md:w-[25%]">
                            <span className="font-bold text-[#000]">
                                Support
                            </span>

                            <ul className={styles.list_f_link}>
                                <li>
                                    <Link href="" target="_blank">
                                        Request Form
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Contact Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Glossary
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[50%] md:w-[25%]">
                            <span className="font-bold text-[#000]">
                                Socials
                            </span>

                            <ul className={styles.list_f_link}>
                                <li>
                                    <Link href="" target="_blank">
                                        X (Twitter)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Telegram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        Reddit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" target="_blank">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[100%] flex flex-wrap items-center justify-between pt-[60px]">
                        <span>
                            © 2024 CoinMarketCap. All rights reserved
                        </span>

                        <div className="">
                            <ul className={styles.list_dl}>
                                <li>
                                    <Link href="/">
                                        <Image src="/app_store_badge_black_1.svg" width={108} height={36} alt="app_store_badge" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <Image src="/google_play_badge_1.png" width={120} height={36} alt="google_play_badge" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <Image src="/qr-code-button.svg" width={0} height={0} sizes="100vw" style={{
                                            width: 'auto',
                                            height: '36px',
                                        }} alt="qr-code" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}