import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Swipers(){

    return(
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
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://i.pinimg.com/736x/4a/fd/ff/4afdff0dcb652f3331e3ae6e498ced19.jpg'/></SwiperSlide>
         
        </Swiper>
      </>
    )
}