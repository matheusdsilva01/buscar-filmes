"use client";
import Image from "next/image";
import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Navigation, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Backdrop } from "types/Images";

interface CarouselImagesProps {
  images: Backdrop[];
}

export const CarouselImages = ({ images }: CarouselImagesProps) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      scrollbar={{
        hide: false,
        draggable: true,
        dragClass: "swiper-scrollbar-drag-custom-white"
      }}
      onInit={swiper => {
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      slidesPerView={2.3}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
          speed: 500
        },
        1024: {
          slidesPerView: 3.3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          speed: 700
        }
      }}
    >
      {images.length &&
        images.map(bd => (
          <SwiperSlide key={bd.file_path}>
            <Image
              width={bd.width}
              height={bd.height}
              src={`https://image.tmdb.org/t/p/w500/${bd.file_path}`}
              alt="backdrop"
            />
          </SwiperSlide>
        ))}
      <button className="w-auto swiper-button-prev after:content-none drop-shadow-sm shadow-black">
        <ChevronLeftIcon width={48} color="white" />
      </button>
      <button className="w-auto swiper-button-next after:content-none drop-shadow-sm shadow-black">
        <ChevronRightIcon width={48} color="white" />
      </button>
    </Swiper>
  );
};
