import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"



export default function ThreeBlock(){
    return (
        <>
            <section className="py-10 px-4">
                <h2 className=" text-[3rem] uppercase font-extralight mb-6">Populyar məhsullar və kateqoriyalar</h2>
                <ul className="flex flex-wrap gap-[2%] gap-y-8 justify-around">
                    <li className="w-[35.5%] h-[324px] rounded-3xl bg-[#d7d3f2] p-6 pt-7 py-8 text-[#030d2b]">
                        <h2 className="text-4xl mb-6">Sizin ofisniz üçün <br /><b>seçilmiş</b> məhsullar.</h2>
                        <p className="font-extralight text-lg mb-14">
                            Ən populyar məhsullarımızı və kateqoriyalarımızı nəzərdən keçirin. Lazım olanı tapın.
                        </p>
                        <Link 
                            href="./goods"
                            className="bg-defCol2 rounded-3xl py-3 px-6 inline-flex items-center gap-2 text-white hover:bg-defCol1"
                            >
                                <Image
                                    src="/next-btn.svg"
                                    width={16}
                                    height={16}
                                />
                                Məhsullara keç
                        </Link>
                    </li>


                    <li className="w-[35.5%] h-[324px] rounded-3xl bg-defCol2 p-6 pt-7 py-8 text-white">
                        <div className={`${styles.rating} z-10 rounded-2xl w-32 h-34 border border-white p-2`}>
                                <div className={`${styles.content} content rounded-xl border border-white`}>
                                    <div className="stars border-b border-white flex items-center justify-center p-2">
                                        <Image
                                        src="/products/rating.svg"
                                        width={180}
                                        height={34}
                                        /> 
                                    </div>
                                    <div className="title text-xs font-bold text-center uppercase text-[#030d2b] py-1">
                                        Ilin <br /> ən yaxşı <br /> məhsulu
                                    </div>
                                    <div className="year bg-white text-center font-bold text-md rounded-lg text-[#030d2b] tracking-[2px]">2023</div>
                                </div>                                
                        </div>

                        <div className="title z-10 absolute left-6 top-48 text-white text-5xl font-bold">
                            HPE ProLiant <span className="text-4xl block">DL380 Gen10</span>
                        </div>
                        <div className="picture absolute right-2 top-2">
                                <Image
                                    src="/products/server.png"
                                    width={260}
                                    height={120}
                                /> 
                        </div>
                        <Link 
                            href="./goods"
                            className="absolute right-3 bottom-3  bg-defCol1 text-white rounded-3xl py-3 px-6 inline-flex items-center gap-2 hover:bg-defCol1"
                            >
                                <Image
                                    src="/next-btn.svg"
                                    width={16}
                                    height={16}
                                />
                                Məhsula keç
                        </Link>
                    </li>


                    <li className="w-3/12 h-[324px] rounded-3xl bg-blue-200 p-6 pt-7 py-8 text-white overflow-hidden">
                                <Image
                                    src="/products/iphone-2.webp"
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', maxWidth: '400%', position: 'absolute' }}
                                />
                                <div className="absolute left-4 bottom-4 text-5xl text-white font-bold">Apple <br /> məhsulları</div>
                        <Link 
                            href="./goods"
                            className="absolite bg-defCol1 rounded-3xl py-3 px-6 inline-flex items-center gap-2 hover:bg-defCol1"
                            >
                                <Image
                                    src="/next-btn.svg"
                                    width={16}
                                    height={16}
                                />
                                Məhsullara keç
                        </Link>
                    </li>


                    <li className="w-2/12 h-[324px] rounded-3xl bg-gradient-to-r from-defCol4 to-defCol3 p-3 text-white overflow-hidden">
                            
                        <Link 
                            href="./goods"
                            className=" h-full rounded-3xl p-8 text-center border border-white text-4xl flex items-center justify-center hover:opacity-85"
                            >
                                Bütün <br /> məhsullar
                        </Link>
                    </li>


                    <li className="w-4/12 h-[324px] rounded-3xl bg-blue-200 p-4 text-white overflow-hidden">
                         <div className="picture w-full h-32 overflow-hidden rounded-2xl">
                                <Image
                                    src="/products/cameralar.jpeg"
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '400%' }}
                                />
                                <div className="absolute left-2 bottom-1 text-4xl text-white">
                                    Kameralar
                                </div>
                         </div>
                         <div className="py-3 px-3 text-md font-extralight text-white">
                            Bütün növ müşahidə kameraları – daxili və xarici, IP, Wi-Fi, analog, HD və bulud əsaslı kameralar. Hərəkət sensorlu, gecəgörmə funksiyalı, uzaqdan izləmə və qeyd imkanları ilə müasir təhlükəsizlik sistemləri.
                         </div>
                        <Link 
                            href="./goods"
                            className="bg-blue-300 rounded-3xl py-3 px-6 flex items-center justify-center gap-2 hover:bg-blue-400"
                            >
                                <Image
                                    src="/next-btn.svg"
                                    width={16}
                                    height={16}
                                />
                                Məhsullara keç
                        </Link>
                    </li>



                    <li className="w-[46%] h-[324px] rounded-3xl bg-blue-200 p-4 text-white overflow-hidden">
                                <Image
                                    src="/products/smart-home.png"
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: '0', top: '0' }}
                                />

                                <div className="bg-defCol1/[.2] backdrop-blur-sm w-8/12 h-full p-4 rounded-2xl border border-defCol1/[.3]">
                                    <h3 className="text-white font-bold text-2xl mb-4">Ağıllı ev sistemləri</h3>
                                    <p className="font-extralight border-b border-white pb-6 mb-6">
                                        Müasir ağıllı ev texnologiyaları – işıqlandırma, istilik sistemi, təhlükəsizlik kameraları, qapı kilidləri və məişət cihazlarını uzaqdan idarə etmək üçün. Səsli əmrlər, mobil tətbiqlər və avtomatlaşdırma ilə rahatlıq və təhlükəsizlik təmin edin.
                                    </p>
                                    <Link 
                                        href="./goods"
                                        className="bg-defCol2 rounded-3xl py-3 px-6 inline-flex items-center gap-2 hover:bg-defCol1"
                                        >
                                            <Image
                                                src="/next-btn.svg"
                                                width={16}
                                                height={16}
                                            />
                                            Məhsullara keç
                                    </Link>
                                </div>
                        
                    </li>

                </ul>
            </section>
        </>
    )
}