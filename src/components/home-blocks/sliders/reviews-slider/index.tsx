'use client'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import Image from 'next/image';

// Icons


export function Reviews__slider({ swiperRef }) {
  return (
    <>
    
      <Swiper
      onSwiper={(swiper) => swiperRef.current = swiper}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        modules={[Autoplay, Navigation]}
        className='reviewsSliderSwiper'
      >
      <SwiperSlide>
          <div className="w-full h-[400px] p-6">
              <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                  <div className="flex justify-between absolute left-0 top-0 w-full">
                      <div className="ico px-8 py-5">
                          <Image  
                              src="/fourBlock_slider/icon/quote.svg"
                              width={70}
                              height={70}
                          />
                      </div>
                      <span className='topRight_border'>
                          <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                      </span>
                  </div>
                  <div className="p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                  </div>
                  <div className="flex p-4 gap-4">
                      <div className="avatar">
                          <Image  
                              src="/fourBlock_slider/ava.jpg"
                              width={50}
                              height={50}
                              className='rounded-full'
                          />
                      </div>
                      <div className="info">
                          <h4>Aysel Isamyilova</h4>
                          <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                      </div>
                  </div>
              </div>
          </div>
      </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[400px] p-6">
                <div className="reviews_slider h-full w-full bg-white rounded-2xl flex flex-col justify-end">
                    <div className="flex justify-between absolute left-0 top-0 w-full">
                        <div className="ico px-8 py-5">
                            <Image  
                                src="/fourBlock_slider/icon/quote.svg"
                                width={70}
                                height={70}
                            />
                        </div>
                        <span className='topRight_border'>
                            <i className="absolute right-0 bottom-0 text-sm text-white opacity-30">23.04.2023</i>
                        </span>
                    </div>
                    <div className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi accusamus nemo molestias, ea quos quo, quidem, nulla ab neque nam harum repellat iure incidunt amet delectus corporis tempora possimus.
                    </div>
                    <div className="flex p-4 gap-4">
                        <div className="avatar">
                            <Image  
                                src="/fourBlock_slider/ava.jpg"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                        <div className="info">
                            <h4>Aysel Isamyilova</h4>
                            <p className="text-sm text-slate-600 font-extralight">AST Company manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
