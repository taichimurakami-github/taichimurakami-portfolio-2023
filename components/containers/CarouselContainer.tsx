import React from 'react';
import { Silkscreen } from '@next/font/google';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import extension from '@/styles/extension.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function CarouselContainer(props: {
  id: string;
  contents: JSX.Element[];
}) {
  return (
    <div>
      <div className={`mx-auto mb-8 ${extension['swiper-wrapper']}`}>
        <button
          id="swiper_button_prev"
          className={`${extension['swiper-button-prev']} ${extension['swiper-button']} ${silkscreen_regular.className}`}
        >
          &lt;
        </button>
        <Swiper
          spaceBetween={15}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '#swiper_button_prev',
            nextEl: '#swiper_button_next',
          }}
          pagination={{
            clickable: true,
            el: '#swiper_pagination',
            bulletActiveClass: extension['swiper-pagination-bullet-active'],
            bulletClass: extension['swiper-pagination-bullet'],
          }}
          slidesPerView={1}
          className={`${extension['swiper-contents-container']}`}
        >
          {props.contents.map((elem, i) => (
            <SwiperSlide key={`${props.id}_carouselContent_${i}`}>
              {elem}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id="swiper_button_next"
          className={`${extension['swiper-button-next']} ${extension['swiper-button']} ${silkscreen_regular.className}`}
        >
          &gt;
        </button>
      </div>
      <div
        id="swiper_pagination"
        className={`${extension['swiper-pagination-container']}`}
      ></div>
    </div>
  );
}
