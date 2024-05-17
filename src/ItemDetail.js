import "./Css/ItemDetail.css";
import React from "react";
import FormWeb from "./FormWeb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Swipers({ imageUrls }) {
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
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className="img-swiper" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const ItemDetail = () => {
    const imageUrls = [
        "https://lienquan.garena.vn/files/posts/341b96ef575a01182f0f52170c4b82866555cc7c928e4.png",
        "https://another-url.com/image2.png",
        "https://another-url.com/image3.png",
        // Thêm nhiều URL hình ảnh khác vào đây
      ];
  return (
    <FormWeb>
      <div className="background">
        <div className="body">
          <div className="five-cols">
          <Swipers imageUrls={imageUrls} />
          </div>
          <div className="seven-cols"></div>
        </div>
      </div>
    </FormWeb>
  );
};
export default ItemDetail;
