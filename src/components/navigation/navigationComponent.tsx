
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'



import styles from './styles.module.scss'
import categoriesData from '/Users/sananragimli/coder/centralstore/frontend/public/data/categories/data.json';
import NavigationSearch from './navigationSearch';





export default function NavigationComponent() {

    const [isCategories, setIsCategories] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const toggleCategories = () => {
        setIsCategories(!isCategories);
        setIsSearch(false);
        setIsMenu(false);
    };


    const toggleSeaerch = () => {
        setIsSearch(!isSearch);
        setIsCategories(false);
        setIsMenu(false);
    };
    const toggleMenu = () => {
        setIsSearch(false);
        setIsCategories(false);
        setIsMenu(!isMenu);
    };



    const [activeCategory, setActiveCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setActiveCategory(category);
      };





    return (
        <>
         <div className={`${styles.NavigationSite} z-50`}>
                <div className="container">
                    <div className="bg-defCol2 z-20 rounded-full pb-2">
                        <div className="flex items-start">
                            <div className={`${styles.navigationTopBorder} flex gap-3 p-2 rounded-br-3xl`}>
                                <Link href={'/'}> <span className='text-xl text-defCol2 z-10'>CentralStore</span></Link>
                            </div>
                            <div className="flex justify-between w-full py-2 pl-2 pr-6">
                                <div className="left w-[calc(100%-164px)] flex gap-4">
                                    <div className="categories">
                                        <button onClick={toggleCategories} className={`${isCategories && 'shadow-whiteRgba'} flex items-center gap-3 bg-white rounded-full p-2 shadow-lg transition-all outline-none hover:shadow-whiteRgba`}>
                                            <Image
                                                src="/icons/navigation/catigories.svg"
                                                width={20}
                                                height={20} />
                                                <span className="text-defCol2">Kateqoriyalar</span>
                                        </button>
                                    </div>
                                    <div className="search w-4/5">
                                        <div className="flex">
                                        <button onClick={toggleSeaerch} className='flex items-center gap-3 bg-white rounded-full p-2 shadow-lg transition-all outline-none hover:shadow-whiteRgba'> 
                                            {isSearch ? (<Image
                                                src="/icons/navigation/close.svg"
                                                width={20}
                                                height={20} />) : (<Image
                                                    src="/icons/navigation/search.svg"
                                                    width={20}
                                                    height={20} />)}
                                            
                                        </button>
                                        {isSearch && (
                                            <NavigationSearch/>
                                        )}

                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className="right flex gap-4">
                                        <button className='flex items-center gap-3 bg-white rounded-full p-2 shadow-lg transition-all outline-none hover:shadow-whiteRgba'> 
                                            <Image
                                                src="/icons/navigation/key.svg"
                                                width={24}
                                                height={24} />
                                        </button>

                                        <div className="burgerMenu">
                                                <button onClick={toggleMenu} className={`${isMenu && 'shadow-whiteRgba'} flex items-center gap-3 bg-white rounded-full p-2 px-4 shadow-lg transition-all outline-none hover:shadow-whiteRgba`}>
                                                    <Image
                                                        src="/icons/navigation/menu.svg"
                                                        width={20}
                                                        height={20} />
                                                        <span className="text-defCol2">Menu</span>
                                                </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isCategories && (
                        <div className="absolute z-10 right-0 top-2/3 w-full bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pt-11 pb-5 flex">
                            <div className="basicMenu border-r border-slate-100 ">
                                <ul className='flex flex-col'>
                                    {categoriesData.kateqoriyalar.map((category, index) => (
                                        <li
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(category)}
                                        className={`${activeCategory && activeCategory.ad === category.ad ? 'bg-slate-100' : ''} cursor-pointer py-3 px-6 border-b border-slate-100 font-extralight last:border-b-0 hover:bg-slate-100`}
                                        >
                                        {category.ad}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="underMenu p-3 px-6">
                                {activeCategory ? (
                                <ul className='flex flex-wrap gap-10'>
                                    {activeCategory.alt_kateqoriyalar.map((subcategory, index) => (
                                    <li key={index}>
                                        <Link className='text-defCol2 hover:text-defCol1' href="/">{subcategory}</Link>
                                    </li>
                                    ))}
                                </ul>
                                ) : (
                                <p className='text-md text-defCol1 font-extralight'>Kategoriyaya klikləyin</p>
                                )}
                            </div>
                        </div>
                    )}



                    {isMenu && (
                        <div className="bigMenu absolute left-[5%] top-full bg-white shadow-xl py-6 w-[90%] rounded-bl-3xl rounded-br-3xl">
                                <ul className={styles.menuListLinks}>
                                    <li>
                                        <Link href="/">Item 1</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Item 2</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Item 3</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Item 4</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Item 5</Link>
                                    </li>
                                </ul>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}