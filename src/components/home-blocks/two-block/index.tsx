import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'


export default function TwoBlock() {
    return (
        <>
            <section className='py-20'>
                <div className="container">
                    <div className="text-center flex items-end justify-center">
                        <h2 className='ml-32 text-[3rem]'>Xidmətlərimiz necə işləyir?</h2>
                        <Link href="/about" className='text-lg text-gray-500 italic font-light mb-3 ml-7'>Daha ətraflı &#8594;</Link>
                    </div>
                    <div className="my-10 flex justify-between gap-16">
                        <div className="bg-defCol1 h-[500px] w-6/12 rounded-[30px] p-8 text-white">
                            <div className="title text-xl  font-extralight mb-10">
                                <div className="text-3xl uppercase font-bold not-italic">Çox sadədir: </div>  qeydiyyatdan keçin, sizə lazım olan məhsulu seçin və ən yaxın təchizatçıdan alın. Vaxta və pula qənaət edin.
                            </div>
                            <ul className='text-lg flex flex-col gap-6 pl-4 list-disc'>
                                <li>
                                    <div className="title">Qeydiyyat</div>
                                    <p className='font-extralight'>Topdançı və ya alıcı kimi bizə qoşulun.</p>
                                </li>
                                <li>
                                    <div className="title">Məhsul axtarışı.</div>
                                    <p className='font-extralight'>Məkanınızı daxil edərək sizə lazım olan hissələri və aksesuarları tapın.</p>
                                </li>
                                <li>
                                    <div className="title">Sifariş və çatdırılma.</div>
                                    <p className='font-extralight'>Sifarişinizi verin və çatdırılma və quraşdırma kimi əlavə xidmətləri seçin.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="h-[500px] w-6/12 rounded-3xl">
                            <Image
                                src="/services.jpeg"
                                className="absolute left-0 top-0 w-full h-full object-cover z-10 rounded-3xl"
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="Picture of the author"
                            />
                            <div className={styles.top_right}>
                                
                                <div className={styles.content}>
                                    <h3>5000+</h3>
                                    <p>çox məhsul</p>
                                </div>
                            </div>
                            <div className={styles.bottom_left}>
                                <div className={styles.content}>
                                    <h3>1500+</h3>
                                    <p>çox topdançı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}