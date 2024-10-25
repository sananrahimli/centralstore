"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './styles.module.scss'




export default function OneBlock__SearchBlock() {


    const [isActive, setIsActive] = useState(false);
    const [valCat, setValCat] = useState('Hamsi');

    const handleClick = () => {
        setIsActive(!isActive); 
    };

    const handleParentClick = (event)=>{
        if (event.target.matches('li')) {
            const buttonId = event.target.dataset.val;
            setValCat(buttonId);
            setIsActive(!isActive); 
          }
    }
    

    useEffect(()=>{

    }, [valCat])

    return (
        <>
            <form action="" className={`${styles.searchForm} flex items-center justify-end`}>
                <input className={styles.search_input} type="text" placeholder='HP Vendor-458...'/>
                <div className={`${styles.search_categories} ${isActive ? `${styles.active}` : ''}`}>
                    <div className="flex items-center" onClick={handleClick}>
                        <div className={styles.icon}>
                            <Image
                                src="/search-icon.svg"
                                width={23}
                                height={23}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={styles.values}>
                            <div className={styles.categories_name}>Kateqoiyalar</div>
                            <div className={styles.categories_value}><span>{valCat}</span></div>
                        </div>
                    </div>
                    <div className={styles.categories_drop}>
                        <ul onClick={handleParentClick}>
                            <li data-val="Hamsı" className='bg-defCol2 text-white'>x Sıfırla</li>
                            <li data-val="Kompüterlər">Kompüterlər</li>
                            <li data-val="Kompüter hissələri">Kompüter hissələri </li>
                            <li data-val="Telefonlar və Aksessuarlar">Telefonlar və Aksessuarlar</li>
                            <li data-val="Ofis texnikası">Ofis texnikası</li>
                            <li data-val="Təhlükəsizlik sistemləri">Təhlükəsizlik sistemləri</li>
                            <li data-val="İnformasiya texnologiyaları avadanlıqları">İnformasiya texnologiyaları avadanlıqları</li>
                            <li data-val="Məişət texnikası ">Məişət texnikası </li>
                            <li data-val="İşıqlandırma avadanlıqları ">İşıqlandırma avadanlıqları </li>
                            <li data-val="Avto ehtiyat hissələri">Avto ehtiyat hissələri</li>
                        </ul>
                    </div>
                </div>

                <button className={styles.search_button}>Axtarış</button>
            </form>
        </>
    )
}