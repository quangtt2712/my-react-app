import "./Css/ItemDetail.css";
import React, { useState, useEffect } from "react";
import FormWeb from "./FormWeb";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
Modal.setAppElement("#root"); // Để đảm bảo truy cập

function Swipers({ imageUrls }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = imageUrls.length;

  const openModal = (url) => {
    setSelectedImage(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(imageUrls[(currentImageIndex + 1) % totalImages]);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
    setSelectedImage(
      imageUrls[(currentImageIndex - 1 + totalImages) % totalImages]
    );
  };
  
  
  useEffect(() => {
    setSelectedImage(imageUrls[currentImageIndex]);
  }, [currentImageIndex]);
  
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
          delay: 3000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="img-swiper-item-detail"
              onClick={() => openModal(url)}
            />
            <div className="image-count">
              {currentImageIndex + 1} / {imageUrls.length}
            </div>
            <div className="zoom-message">Nhấn vào ảnh để phóng to</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div onClick={prevImage} className="prev-button">
          <ArrowBackIosNewIcon />
        </div>
        <div onClick={nextImage} className="next-button">
          <ArrowForwardIosIcon />
        </div>
        <button onClick={closeModal} className="close-button">
          Đóng
        </button>
        <img src={selectedImage} alt="Zoomed" className="modal-image" />
      </Modal>
    </>
  );
}

const ItemDetail = () => {
  const imageUrls = [
    "https://sys.tmso1.co/images/2GkSc4XRuGda9J5.png",
    "https://sys.tmso1.co/images/Rj4GzHDUoJQZ1HJ.png",
    "https://sys.tmso1.co/images/hoDMb51Txz8nVMc.jpeg",
    // Thêm nhiều URL hình ảnh khác vào đây
  ];
  return (
    <FormWeb>
      <div className="background-body-item-detail">
        <div className="body-item-detail">
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
