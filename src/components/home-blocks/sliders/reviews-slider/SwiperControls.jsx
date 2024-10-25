import Image from "next/image";


export default function SwiperControls({ swiperRef }) {
    const handleNext = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
  
    const handlePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };
  
    return (
      <div className="flex gap-4">
        <button onClick={handlePrev}>
            <Image
                src="/fourBlock_slider/icon/previous.svg"
                width={52}
                height={52}
            />
        </button>
        <button onClick={handleNext}>

            <Image
                src="/fourBlock_slider/icon/next.svg"
                width={52}
                height={52}
            />
        </button>
      </div>
    );
  }