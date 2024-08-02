import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
function Slider() {
  return (
    <div>
      <div className="swiper1">
        <Swiper
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src="\assests\images\poster\Dekstop1920x694.webp"
                className="img-fluid w-100"
                alt=""
              />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="\assests\images\poster\Desktop_1920x694.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="\assests\images\poster\Desktop.webp"
                className="img-fluid w-100"
                alt=""
              />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
