'use client'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Image from 'next/image';

// Icons


export function OneBlock__slider({children}) {
  return (
    <>
    
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className={children}
      >
        <SwiperSlide>
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Ən yaxın təchizatçılar</h3>
            <p>Məkanınıza ən yaxın mağazalardan lazımi məhsulları tapın və sifariş edin.</p>
        </SwiperSlide>
        <SwiperSlide>            
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Çatdırılma və quraşdırma</h3>
            <p>Məhsulların sürətli çatdırılması və peşəkar quraşdırma xidmətlərindən faydalanın.</p>
        </SwiperSlide>
        <SwiperSlide>            
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Ən yaxşı qiymət və keyfiyyət</h3>
            <p>Qiymətləri və xüsusiyyətləri müqayisə edin, ən yaxşı variantı seçin.</p>
        </SwiperSlide>
        <SwiperSlide>            
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Sürətli Qeydiyyat</h3>
            <p>Sadə qeydiyyat prosesi ilə asanlıqla hesab yaradın və təkliflərdən yararlanın.</p>
        </SwiperSlide>
        <SwiperSlide>            
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Sürətli Qeydiyyat</h3>
            <p>Sadə qeydiyyat prosesi ilə asanlıqla hesab yaradın və təkliflərdən yararlanın.</p>
        </SwiperSlide>
        <SwiperSlide>            
            <div className="icon">
                <Image
                    src="oneBlock__slider_icons/ico1.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
            </div>
            <h3>Sürətli Qeydiyyat</h3>
            <p>Sadə qeydiyyat prosesi ilə asanlıqla hesab yaradın və təkliflərdən yararlanın.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
