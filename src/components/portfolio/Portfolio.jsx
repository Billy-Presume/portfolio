import "./portfolio.scss";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles.css";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <div className="heading">Portfolio</div>
      </div>
      <div className="bottom">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" id="s1">
            This slide will soon be filled with content. <br /> This website is
            currently under construction.
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" id="s2">
            This slide will soon be filled with content. <br /> This website is
            currently under construction.
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" id="s3">
            This slide will soon be filled with content. <br /> This website is
            currently under construction.
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" id="s4">
            This slide will soon be filled with content. <br /> This website is
            currently under construction.
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

// return (
//   <div className="portfolio" id="portfolio">
//     <div className="top">
//       <div className="heading">Portfolio</div>
//     </div>
//     <div className="bottom">
//       <div className="main-container">
//         <div className="outer-container">
//           <div className="left">
//             <div className="title">Projects</div>
//             <div className="title-list">
//               {listData.map((item) => (
//                 <ProjectList title={item.title} />
//               ))}
//             </div>
//           </div>
//           <div className="right">
//             <Carousel className="container" />
//           </div>
//         </div>

//         <div className="left-arrow">
//           <i class="fa fa-arrow-circle-left"></i>
//         </div>
//         <div className="right-arrow">
//           <i class="fa fa-arrow-circle-right"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// );
