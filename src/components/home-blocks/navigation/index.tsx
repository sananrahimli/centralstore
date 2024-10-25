import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'


export default function HomeNavigation() {
    return (
        <>
            <div className={styles.HomeNavigation_content}>
                <div className="container px-4 h-full">
                   <div className="flex items-center justify-between h-full">
                        <Link href="about">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo-white.svg"
                                    width={40}
                                    height={40}
                                    alt="Picture of the author"
                                />
                                <span className='text-xl text-white'>CentralStore</span>
                            </div>                            
                        </Link>
                        <nav className={`${styles.navigationList} flex gap-8 text-white`}>
                            <Link href="/" className=''>Ana səyfə</Link>
                            <Link href="./about" className=''>Biz kimiz</Link>
                            <Link href="./companies" className=''>Topdançılar</Link>
                            <Link href="./goods" className=''>Məhsullar</Link>
                        </nav>
                    </div> 
                </div>
            </div>
        </>
    )
}