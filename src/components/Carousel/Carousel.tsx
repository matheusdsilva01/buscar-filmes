"use client";
import { useRef } from "react";

import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFilm, IFilmPopulars } from "types/Film";

import CardFilm from "../CardFilm/CardFilm";

interface CarouselProps {
  items: IFilm[] | IFilmPopulars[];
}

const Carousel = ({ items }: CarouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        onInit={swiper => {
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current!;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current!;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
            speed: 500
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            speed: 700
          }
        }}
        slidesPerGroup={1}
        slidesPerView={1}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <CardFilm key={index} film={item} />
          </SwiperSlide>
        ))}
        <button
          ref={prevRef}
          className="w-auto swiper-button-prev after:content-none"
        >
          <ChevronLeftIcon width={48} color="white" />
        </button>
        <button
          ref={nextRef}
          className="w-auto swiper-button-next after:content-none"
        >
          <ChevronRightIcon width={48} color="white" />
        </button>
      </Swiper>
    </>
  );
};
export default Carousel;
