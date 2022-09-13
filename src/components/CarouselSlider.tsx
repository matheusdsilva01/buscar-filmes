import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { IFilm } from "../interfaces/Film";
import CardFilm from "./CardFilm";

interface CarouselProps {
    items: IFilm[];
}

const CarouselSlider = ({ items }: CarouselProps) => {
    const [films, setFilms] = useState<IFilm[][]>();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        separar(items, 3)
    }, [items])

    const separar = (base: IFilm[], maximo: number) => {
        var resultado: IFilm[][] = [[]];
        var grupo = 0;

        for (var indice = 0; indice < base.length; indice++) {
            if (resultado[grupo] === undefined) {
                resultado[grupo] = [];
            }
            resultado[grupo].push(base[indice]);

            if ((indice + 1) % maximo === 0) {
                grupo = grupo + 1;
            }
        }
        setFilms(resultado)
    }

    function scrollRigth() {
        containerRef.current!.scrollTo({ behavior: "smooth", left: containerRef.current!.scrollLeft + window.innerWidth });
    }
    function scrollLeft() {
        containerRef.current!.scrollTo({ behavior: "smooth", left: containerRef.current!.scrollLeft - window.innerWidth });
    }


    return (
        <>
            <div className="relative w-100">
                <div ref={containerRef} className="overflow-x-hidden flex gap-8">
                    {films && films.map((item, index) => (
                        <div key={index} className="w-full flex-none flex gap-8 items-center justify-evenly snap-mandatory">
                            {item && item.map((films, index) => (
                                <CardFilm key={index} film={films} />
                            ))}
                        </div>
                    ))}
                    <ul className="absolute float-right left-[50%] flex flex-row bottom-0 text-white">
                    {films?.map((item, i) => (
                        <li key={i}>{i}</li>
                    ))}
                    </ul>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 disabled:opacity-10 duration-150">
                        <ChevronLeftIcon color="white" className="h-10 w-10" />
                    </button>
                    <button
                        onClick={scrollRigth}
                        className="absolute right-2 top-1/2 disabled:opacity-20 duration-150">
                        <ChevronRightIcon color="white" className="h-10 w-10" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CarouselSlider;
