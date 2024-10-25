import Link from 'next/link';
import HomeNavigation from '../navigation';
import styles from './styles.module.scss';
import { OneBlock__slider } from '../sliders/oneBlock-slider';
import OneBlock__SearchBlock from './searchBlock';
import Image from 'next/image';

export default function OneBlock() {
    return (
        <>
            <section className={styles.store_mainBlock}>    
                <div  className={`${styles.mainBlock__contex} flex flex-col justify-between`}>
                    <div className="context_top flex">
                        <HomeNavigation></HomeNavigation>    
                        <div className={styles.topRounded}>
                            <span></span>
                            <span></span>

                            <div className="flex justify-center items-center gap-8 h-full">
                                <Link href='qeydiyyat'>Qeydiyyat</Link>
                                <Link href='girish' className='px-5 py-2 rounded-full bg-defCol1 text-white font-bold'> Giriş</Link>
                            </div>
                        </div> 
                    </div>
                    <div className={styles.context_center}>
                        <div className="flex items-center justify-between">
                            <div className={styles.center__textContent}>
                                <h1>Lazım olan malların və xidmətlərin ən yaxın olduğu mağazaları tapın.</h1>
                                <OneBlock__SearchBlock></OneBlock__SearchBlock>
                            </div>
                            <div className={styles.center__slider}>
                                <OneBlock__slider>OneBlock__slider</OneBlock__slider>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.context_bottom} flex items-center`}>
                        <div className={styles.context_bottom_text}>Əməkdaşlıq etdiyimz şirkətlər:</div>
                        <div className={styles.bottomRounded}>
                            <span></span><span></span>
                            <div className="flex gap-10 items-center justify-around w-full">
                                <div className={styles.brandsLogotype}>
                                        <Image
                                            src="/brands/brand1.svg"
                                            width={0}
                                            height={0}
                                            alt="Picture of the author"
                                        />
                                </div>
                                <div className={styles.brandsLogotype}>
                                        <Image
                                            src="/brands/brand2.svg"
                                            width={0}
                                            height={0}
                                            alt="Picture of the author"
                                        />
                                </div>
                                <div className={styles.brandsLogotype}>
                                        <Image
                                            src="/brands/brand3.svg"
                                            width={0}
                                            height={0}
                                            alt="Picture of the author"
                                        />
                                </div>
                                <div className={styles.brandsLogotype}>
                                        <Image
                                            src="/brands/brand4.svg"
                                            width={0}
                                            height={0}
                                            alt="Picture of the author"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>

                                           
                    
                </div>
            </section>
        </>
    )
}