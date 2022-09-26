import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { IFilm } from "../interfaces/Film";
import CardFilm from "./CardFilm";

import 'swiper/css';
import "swiper/css/navigation";
import { useRef } from "react";

interface CarouselProps {
    items: IFilm[];
}


const Carousel = ({ items }: CarouselProps) => {
    const swiperF = useSwiper();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current

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
                    },
                }}
                slidesPerGroup={1}
                slidesPerView={1}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <CardFilm key={index} film={item} />
                    </SwiperSlide>
                ))}
                <button ref={prevRef} className="w-auto swiper-button-prev after:content-none" onClick={() => swiperF.slidePrev(10)}><ChevronLeftIcon width={48} color="white" /></button>
                <button ref={nextRef} className="w-auto swiper-button-next after:content-none" onClick={() => swiperF.slideNext(10)}><ChevronRightIcon width={48} color="white" /></button>
            </Swiper>
        </>
    )
}
export default Carousel;