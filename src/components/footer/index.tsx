import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"
export default function FooterSite() {
    return (
        <>
            <footer className={styles.footerMain}>
                <div className={styles.animationText}>
                    <div className={styles.keyframesStyles}>
                        <span>Sürətli çatdırılma və quraşdırma xidmətləri ilə rahatlıq təmin edin</span>
                        <span>*</span>
                        <span>Ən yaxın təchizatçılardan sərfəli qiymətlərlə alış-veriş edin.</span>
                        <span>*</span>
                        <span>Ağıllı ev texnologiyaları ilə həyatınızı asanlaşdırın.</span>
                        <span>*</span>
                        <span>Keyfiyyətli məhsullar və zəmanətli xidmətlər.</span>
                    </div>
                </div>
                <div className="container pt-10">
                    <div className="flex gap-32">
                        <ul className="footerMenu text-xl flex flex-col gap-3 mr-auto">
                            <li className="mb-4 font-semibold text-2xl">Naviqasiya</li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Ana səyfə</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Bizim haqqda</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Rəylərmiz</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Əlaqə</Link></li>
                        </ul>

                        <ul className="footerMenu text-xl flex flex-col gap-3">
                            <li className="mb-4 font-semibold text-2xl">Servis</li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Topdançılar</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Məhsullar</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Şirkətlər</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Xəritəd axtar</Link></li>
                        </ul>

                        <ul className="footerMenu text-xl flex flex-col gap-3">
                            <li className="mb-4 font-semibold text-2xl">Resursal</li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Xəbərlər</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">Qaydalar</Link></li>
                            <li><Link href={'/'} className="font-extralight hover:text-defCol1">İstifadə şərtləri</Link></li>
                        </ul>

                        <ul className="socialLinks text-xl flex flex-col gap-3">
                            <li>
                                <div className="phone bg-defCol2 rounded-full p-1 gap-4 flex items-center shadow-inner">
                                    <div className="icon w-9 h-9 rounded-full p-1 bg-white">
                                        <Image
                                            src="/footer/phone.svg"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <Link href={'tel:+994500000000'} className="text-white mr-4">+994 50 000-00-00</Link>
                                </div>
                                </li>
                                <li className="flex gap-4 pl-1">
                                    <Link href={'/'} className="w-9 h-9 rounded-full border border-defCol3 flex items-center justify-center hover:opacity-70">
                                        <Image
                                            src="/footer/soc/wp.svg"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>

                                    <Link href={'/'} className="w-9 h-9 rounded-full border border-defCol3 flex items-center justify-center hover:opacity-70">
                                        <Image
                                            src="/footer/soc/in.svg"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>

                                    <Link href={'/'} className="w-9 h-9 rounded-full border border-defCol3 flex items-center justify-center hover:opacity-70">
                                        <Image
                                            src="/footer/soc/fb.svg"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>

                                    <Link href={'/'} className="w-9 h-9 rounded-full border border-defCol3 flex items-center justify-center hover:opacity-70">
                                     <Image
                                            src="/footer/soc/tw.svg"
                                            width={20}
                                            height={20}
                                        />
                                    </Link>
                                </li>
                                <li></li>
                                <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className="footerBottom pt-20 pb-4">
                    <div className="container">
                        <div className="flex justify-between items-center gap-8">
                            <div className="mail  font-extralight">
                                <Link href="mailto:info@info.az">info@centralstore.az</Link>
                            </div>
                            <div className="sendMessage">
                                <Link href="/" className="bg-defCol1 w-16 h-16 flex items-center justify-center rounded-full hover:bg-defCol2">
                                    <Image
                                        src="/footer/mail.svg"
                                        width={38}
                                        height={38}
                                    />
                                </Link>
                            </div>
                            <div className="copyrating font-extralight">
                            CentralStore ⓒ 2024
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}