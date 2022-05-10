import "./portfolio.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <div className="heading">Portfolio</div>
      </div>
      <div className="bottom">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide" id="s1">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" id="s2">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" id="s3">
            Slide 3
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
