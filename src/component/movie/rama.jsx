// import React from 'react'
// import * as Images from "../../assest/images";
// const LatestData = [
//   {
//     id: 1,
//     name: "Fargo",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//         id: 2,
//         img: "Images.Image_11",
//         name: "Percy Jackson",
//         year: 2024,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 3,
//         img: "Images.Image_12",
//         name: "Night Court",
//         year: 2023,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 4,
//         img: "Images.Image_13",
//         name: "Raising Kanan",
//         year: 2025,
//         genres: "Drama",
//         sort: "Latest",
//       },
//       {
//         id: 5,
//         img: "Images.Image_14",
//         name: "Monarch Legacy of Monsters",
//         year: 2025,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 6,
//         img: "Images.Image_15",
//         name: "Reacher",
//         year: 2023,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 7,
//         img: "Images.Image_16",
//         name: "Slow Horses",
//         year: 2024,
//         genres: "Drama",
//         sort: "popular",
//       },
//     ]
// const rama = () => {
//   return (
//     <div>
//       {LatestData.map((item,index)=>
// <div key={index}></div>
//       )}
//     </div>
//   )
// }

// export default rama



// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import * as Images from "../../assest/images";
// import 'swiper/css/scrollbar';
// import 'swiper/css';
// const rama = () => {
//   return (
//     <div>
//        <Swiper
//         // modules={[scrollbar]}
//       spaceBetween={50}
//       slidesPerView={4}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {/* <div className='flex'> */}
//       <SwiperSlide><img src={Images.Image_1} alt=""/></SwiperSlide>
//       <SwiperSlide><img src={Images.Image_1} alt=""/></SwiperSlide>
//       <SwiperSlide><img src={Images.Image_1} alt=""/></SwiperSlide>
//       <SwiperSlide><img src={Images.Image_1} alt=""/></SwiperSlide>
//       ...
//       {/* </div> */}
//     </Swiper>
//     </div>
//   )
// }

// export default rama


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import * as Images from '../../assest/images';

// const Rama = () => {
//   return (
//     <div>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide><img src={Images.Image_1} alt="Image 1"/></SwiperSlide>
//         <SwiperSlide><img src={Images.Image_1} alt="Image 2"/></SwiperSlide>
//         <SwiperSlide><img src={Images.Image_1} alt="Image 3"/></SwiperSlide>
//         <SwiperSlide><img src={Images.Image_1} alt="Image 4"/></SwiperSlide>
//         {/* Add more SwiperSlides as needed */}
//       </Swiper>
//     </div>
//   );
// }

// export default Rama;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

import * as Images from '../../assest/images';



const Rama = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={Images.Image_1} alt="Image 1"/></SwiperSlide>
        <SwiperSlide><img src={Images.Image_2} alt="Image 2"/></SwiperSlide>
        <SwiperSlide><img src={Images.Image_3} alt="Image 3"/></SwiperSlide>
        <SwiperSlide><img src={Images.Image_4} alt="Image 4"/></SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
}

export default Rama;
