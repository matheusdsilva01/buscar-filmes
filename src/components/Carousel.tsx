import ChevronLeftIcon from "@heroicons/react/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/solid/ChevronRightIcon";
import { useState } from "react";
import { IFilm } from "../interfaces/Film";
import CardFilm from "./CardFilm";

interface CarouselProps {
    items: IFilm[];
    visibleItemsNumber: number;
}


const Carousel = ({ items, visibleItemsNumber }: CarouselProps) => {

    const [start, setStart] = useState(0);

    const isControlsVisible = items?.length > visibleItemsNumber;

    const visibleItems = isControlsVisible
        ? items
            .concat(items.slice(0, visibleItemsNumber))
            .slice(start, start + visibleItemsNumber)
        : items;

    const onNextClick = () => {
        setStart(start + visibleItemsNumber >= items.length ? items.length : start + visibleItemsNumber);
    };

    const onPrevClick = () => {
        setStart(start - visibleItemsNumber >= 0 ? start - visibleItemsNumber : 0);
    };

    return (
        <>
            <div className='relative w-100'>
                <div className='w-full flex items-center justify-evenly'>
                    {visibleItems.map((item, index) => (
                        <CardFilm key={index} film={item} />
                    ))}
                </div>
                <button
                    onClick={() => onPrevClick()}
                    disabled={start === 0}
                    className='absolute left-2 top-1/2 disabled:opacity-10 duration-150'>
                    <ChevronLeftIcon color="white" className='h-10 w-10' />
                </button>
                <button
                    disabled={start + visibleItemsNumber >= items.length}
                    onClick={() => onNextClick()}
                    className='absolute right-2 top-1/2 disabled:opacity-20 duration-150'>
                    <ChevronRightIcon color="white" className='h-10 w-10' />
                </button>
            </div>
        </>
    )
}
export default Carousel;