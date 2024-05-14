import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          disableOnInteraction: false,
        }}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://sys.tmso1.co/images/w7YkpCKrrhCU33Z.png"  alt="" className="img-swiper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sys.tmso1.co/images/3MWk1eA8gNDxBXt.jpeg" alt="" className="img-swiper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sys.tmso1.co/images/hnV2QAWJDslY7zk.jpeg" alt="" className="img-swiper"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
