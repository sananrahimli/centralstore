'use client'
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';




interface BreadcrumbsProps {
    title: string;
    image: string;
}

export default function Breadcrumbs({ title, image }: BreadcrumbsProps) {
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter(Boolean);

    const breadcrumbs = [
        { name: 'Ana səyfəsi', href: '/' },
        ...pathArray.map((path, index) => {
            const fullPath = `/${pathArray.slice(0, index + 1).join('/')}`;
            return {
                name: index === pathArray.length - 1 ? title : decodeURIComponent(path), 
                href: fullPath,
            };
        }),
    ];

    return (
        <>
        <div className="breadcrumbs my-9">
            <div className="container">
                <div className="pageicture rounded-2xl h-60 overflow-hidden w-full">
                        {image ? (
                            <img className='w-full h-full object-cover' src={`/pagesPicture/${image}`} alt={title} />
                        ) : (
                            <img className='w-full h-full object-cover' src={`/pagesPicture/no-picture.jpg`} alt={title} />
                        )}
                </div>
                <div className="pageMetadata flex items-start justify-between gap-10 -mt-12 py-12 px-12 bg-gray-100 rounded-3xl">
                    <div className="">
                        <h1 className='text-4xl text-defDark mb-3'>{title}</h1>
                        <nav>
                            {breadcrumbs.map((crumb, index) => (
                                <span className='font-extralight'  key={index}>
                                    <a href={crumb.href}>{crumb.name}</a>
                                    {index < breadcrumbs.length - 1 && ' > '}
                                </span>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-col items-end">
                            <Link href="#" className="phone flex items-center p-2 rounded-full bg-white">
                                <div className="icon bg-defCol3 w-9 h-9 mr-3 flex items-center justify-center rounded-full">
                                    <Image
                                        src="/icons/breadcrumbs/phone.svg"
                                        width={24}
                                        height={24} />
                                </div>
                                <span className="font-extralight mr-1">Əlaqə:</span>
                                <span className="font-bold pr-2">+994 50 000 00 00</span>
                                
                            </Link>
                            <div className="links mt-2 bg-defCol3 inline-flex items-center gap-3 p-1 px-2 mr-1 rounded-full">
                                <Link href="#" onClick={window.print} className=''>
                                    <Image
                                        src="/icons/breadcrumbs/print.svg"
                                        width={24}
                                        height={24} />
                                </Link>
                                <Link href="#" className=''>
                                    <Image
                                        src="/icons/breadcrumbs/mail.svg"
                                        width={24}
                                        height={24} />
                                </Link>
                                <Link href="#" className=''>
                                    <Image
                                        src="/icons/breadcrumbs/share.svg"
                                        width={24}
                                        height={24} />
                                </Link>
                            </div>
                    </div>    
                </div>
            </div>
        </div>
        
       
        </>
    );
}
