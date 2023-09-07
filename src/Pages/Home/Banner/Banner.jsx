import banner4 from '../../../assets/banner4.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full' src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={banner3} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}