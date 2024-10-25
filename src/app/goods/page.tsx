import Link from 'next/link'
import styles from './styles.module.scss'

import Image from "next/image"
 
export default function Goods() {
    return (
        <>


            <div className="container">
                <div className={`${styles.topGoods} p-3 rounded-3xl bg-gray-50`}>
                    <div className="flex">
                        <div className="info w-6/12">
                            <p className="py-3 px-4 inline-block rounded-full border text-lg">Ən çox satılan məhsul</p>

                            <h2 className={`${styles.nameProduct} text-[4rem] my-6`}>
                                Apple 
                                <p className='pl-8 font-extralight'>Wacth <span>series</span> 10</p>
                            </h2>
                            <div className="price_addTocard mt-8 pl-2 flex items-center">
                                <div className="price text-3xl">
                                    <span className='font-extralight'>1.099</span><span className='pl-2 '>azn</span>
                                </div>
                                <div className="addTocard px-6">
                                    <button className="bg-defCol3 border-defCol4 text-lg text-white flex justify-center items-center gap-2 py-1 pl-4 pr-1 rounded-full hover:bg-defCol2">
                                        Səbətə əlavə et 
                                        <span className='w-10 h-10 bg-defCol4 rounded-full flex items-center justify-center'>
                                        <Image
                                            src="/icons/goods/basket.svg"
                                            width={24}
                                            height={24}
                                            className="mx-auto"
                                            />
                                        </span>
                                        </button>
                                </div>
                            </div>
                        </div>
                        <div className="pitrue bg-gray-100 w-6/12 h-full rounded-2xl p-4 pb-7">
                            <Image
                                src="/data/goods/pictures/top-goods.png"
                                width={500}
                                height={550}
                                className="mx-auto"
                                />
                            <div className={`${styles.topGoods_sections}  absolute bottom-3 left-3 w-[calc(100%-26px)] h-14 flex gap-4`}>
                                <div className="select w-6/12 bg-white bg-opacity-10 rounded-full p-4 h-full backdrop-blur-sm border border-gray-200 flex gap-4 justify-between items-center">
                                    <label htmlFor="size" className="flex items-center gap-1 cursor-pointer">
                                       
                                        <input type="radio" className="hidden" name="size" id="size" />
                                        <span className={`${styles.sizeSelect} bg-white border p-1 px-4 text-md rounded-full`}>
                                            38/40/41
                                        </span>
                                        <div className={`${styles.iconSelect}  flex items-center justify-center w-5 h-5 rounded-full border`}>
                                            <Image
                                                src="/icons/goods/check.svg"
                                                width={14}
                                                height={14}
                                                />
                                        </div>
                                    </label>
                                    <label htmlFor="size-two" className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" className="hidden" name="size" id="size-two" />
                                        <span className={`${styles.sizeSelect} bg-white border p-1 px-4 text-md rounded-full`}>
                                            32/44/45
                                        </span>
                                       
                                        <div className={`${styles.iconSelect}  flex items-center justify-center w-5 h-5 rounded-full border`}>
                                            <Image
                                                src="/icons/goods/check.svg"
                                                width={14}
                                                height={14}
                                                />
                                        </div>
                                    </label>
                                </div>
                                <div className="select w-6/12 bg-white bg-opacity-10 rounded-full p-4 h-full backdrop-blur-sm border border-gray-200 flex gap-x-2">
                                    <label htmlFor="color-1" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-1"/>
                                        <i className="w-6 h-6 bg-gray-600 rounded-full"></i>
                                    </label>
                                    <label htmlFor="color-2" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-2" />
                                        <i className="w-6 h-6 bg-gray-950 rounded-full"></i>
                                    </label>
                                    <label htmlFor="color-3" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-3" />
                                        <i className="w-6 h-6 bg-orange-400 rounded-full"></i>
                                    </label>
                                    <label htmlFor="color-4" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-4" />
                                        <i className="w-6 h-6 bg-blue-400 rounded-full"></i>
                                    </label>

                                    <label htmlFor="color-5" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-5" />
                                        <i className="w-6 h-6 bg-pink-400 rounded-full"></i>
                                    </label>

                                    <label htmlFor="color-6" className="flex items-center gap-1 cursor-pointer">
                                        
                                        <input type="radio" className="hidden" name="color-one" id="color-6" />
                                        <i className="w-6 h-6 bg-green-700 rounded-full"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.allGoods} my-9 flex flex-wrap gap-x-[4%] gap-y-8`}>
                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/watch7.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                Apple Watch SE
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>809</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                4,5
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                        
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl h-64">
                            <Image 
                                src="/products/ipadPro.png"
                                width={170}
                                height={150}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    iPad Pro Gold
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.299</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>


                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/watch7.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                Apple Watch SE
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>809</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                4,5
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                        
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl h-64">
                            <Image 
                                src="/products/ipadPro.png"
                                width={170}
                                height={150}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    iPad Pro Gold
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.299</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>


                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/watch7.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                Apple Watch SE
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>809</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                4,5
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                        
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl h-64">
                            <Image 
                                src="/products/ipadPro.png"
                                width={170}
                                height={150}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    iPad Pro Gold
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.299</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                    <div className="productItem w-[22%]">
                        <div className="picute p-3 bg-gray-200 flex items-center justify-center rounded-2xl">
                            <Image 
                                src="/products/ultra2.png"
                                width={200}
                                height={200}
                                />
                        </div>
                        <div className="info flex px-2 py-2">
                            <div className="w-8/12">
                                <Link href="goods/item1" className='text-lg'>
                                    Apple Watch Ultra 2
                                </Link>
                            </div>
                            <div className="w-4/12 text-right text-xl">
                                <span className='font-extralight'>1.099</span><span className='pl-2 text-defCol4'>azn</span>
                            </div>
                        </div>
                        <div className="rating p-2 flex items-center gap-1">
                            <span className="bg-yellow-200 px-2 py-[3px] rounded-full text-sm px-2rounded-full text-yellow-500">
                                5,0
                            </span>
                            <span className="bg-yellow-200 w-28 py-1 px-2 flex gap-x-1 rounded-full">
                            <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                /> 
                                <Image 
                                    src="/icons/goods/star.svg"
                                    width={16}
                                    height={16}
                                />                           
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}