import "./Css/ItemDetail.css";
import React, { useState, useEffect } from "react";
import FormWeb from "./FormWeb";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/pagination";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
Modal.setAppElement("#root");

function Swipers({ imageUrls }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true); // New state for autoplay

  const totalImages = imageUrls.length;

  const openModal = (url) => {
    setSelectedImage(url);
    setModalIsOpen(true);
    setAutoplayEnabled(false); // Disable autoplay when modal opens
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
    setAutoplayEnabled(true); // Enable autoplay when modal closes
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
  }, [currentImageIndex, imageUrls]);

  useEffect(() => {
    // Toggle autoplay based on modal state
    const swiperInstance = document.querySelector(".mySwiper").swiper;
    if (swiperInstance) {
      if (modalIsOpen) {
        swiperInstance.autoplay.stop();
      } else {
        if (autoplayEnabled) {
          swiperInstance.autoplay.start();
        }
      }
    }
  }, [modalIsOpen, autoplayEnabled]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="img-swiper-item-detail"
              onClick={() => openModal(url, index)}
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
        <div className="image-count">
          {currentImageIndex + 1} / {imageUrls.length}
        </div>
      </Modal>
    </>
  );
}
const formatAmount = (amount) => {
  return amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ItemDetail = () => {
  const imageUrls = [
    "https://sys.tmso1.co/images/2GkSc4XRuGda9J5.png",
    "https://sys.tmso1.co/images/Rj4GzHDUoJQZ1HJ.png",
    "https://sys.tmso1.co/images/hoDMb51Txz8nVMc.jpeg",
    "https://firebasestorage.googleapis.com/v0/b/mindmasterminds.appspot.com/o/images%2FYena%20huy%E1%BB%81n%20c%E1%BB%ADu%20thi%C3%AAn.lafthanh.png?alt=media&token=9cbc8e34-20c3-42dd-a011-50dbefa14f04",
    // Thêm nhiều URL hình ảnh khác vào đây
  ];

  return (
    <FormWeb>
      <div className="background-body-item-detail">
        <div className="body-item-detail">
          <div className="five-cols">
            <div className="five-cols-body">
              <Swipers imageUrls={imageUrls} />
            </div>
          </div>
          <div className="seven-cols">
            <div className="id-nick-game">Mã số: 1303704</div>
            <p className="description-id-nick-game">
              nak lôi mun chí tôn raz thái nk võ thần lau phi thiên vio thần
              long
            </p>
            <div className="card-item-detail">
              <div className="text-price-item-detail">
                <div className="text-atm-momo">
                  <div className="background-text-atm-momo">
                    <div> ATM, MOMO</div>
                    <LocalFireDepartmentIcon />
                  </div>
                </div>
                <div>{formatAmount(2728000)}</div>
              </div>
              <div className="add-to-card-item-detail">
                <AddShoppingCartIcon className="icon-add-to-card-item-detail" />
                <div>Thêm vào giỏ</div>
              </div>
            </div>
            <div className="id-nick-game">THÔNG TIN CHI TIẾT</div>
            <div className="information-item-detail">
              <div className="background-information-item-detail">
                <div className="text-background-information-item-detail">
                  Tướng
                </div>
                <div className="description-background-information-item-detail">
                  49
                </div>
              </div>
              <div className="background-information-item-detail">
                <div className="text-background-information-item-detail">
                  Trang phục
                </div>
                <div className="description-background-information-item-detail">
                  75
                </div>
              </div>
              <div className="background-information-item-detail">
                <div className="text-background-information-item-detail">
                  Rank
                </div>
                <div className="description-background-information-item-detail">
                  bk
                </div>
              </div>
              <div className="background-information-item-detail">
                <div className="text-background-information-item-detail">
                  Tỉ lệ thắng
                </div>
                <div className="description-background-information-item-detail">
                  100%
                </div>
              </div>
              <div className="background-information-item-detail">
                <div className="text-background-information-item-detail">
                  Trạng thái
                </div>
                <div className="description-background-information-item-detail">
                  ttt
                </div>
              </div>
            </div>
            <div className="background-button-buy">

                <div className="content-background-button-buy">
                  <CardGiftcardIcon />
                  <div className="text-content-background-button-buy">Mua ngay</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </FormWeb>
  );
};
export default ItemDetail;
