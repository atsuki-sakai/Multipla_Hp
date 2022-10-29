
import React, { ReactNode, useState, Children, isValidElement, cloneElement } from 'react'
import { useKeenSlider } from "keen-slider/react"

interface Props  {
    children: ReactNode | ReactNode[] | any;
};

const Slider = ({ children }: Props) => {

    const initalSlide = 0
    const [currentSlide, setCurrentSlide] = useState<number>(initalSlide)
    const [ sliderRef, slider ] = useKeenSlider({
        initial: initalSlide,
        loop: false,
        slideChanged(slide) {
            setCurrentSlide(slide.track.details.rel)
        },
    })
    return (
        <>
            <div className='align-baseline font-bold rouneded-full px-3 py-1 bg-gray-50 w-fit'>回答数 <span className='font-bold text-blue-500 text-2xl'>{currentSlide + 1}</span> / <span className='text-gray-500 text-lg font-light'>{children.length}</span></div>
            <div ref={sliderRef} className="keen-slider flex h-fit w-full overflow-x-hidden">
                {
                    Children.map(children, (child) => {
                        if(isValidElement(child)) {
                            const props = child.props as { [key: string]: string }
                            return cloneElement(child, {
                                className:  props.className ? `${props.className} keen-slider__slide` : "keen-slider__slide"
                            } as HTMLDivElement )
                        }
                        return child;
                    })
                }
            </div>
            <div className='flex items-center justify-around mt-2 md:mt-4 mb-12'>
                <button
                    className='bg-red-500 text-white font-bold px-6 py-2 rounded-full shadow-md'
                    onClick={ () => slider.current?.prev() }
                >
                    戻る
                </button>
                <button
                    className='bg-blue-500 text-white font-bold px-6 py-2  rounded-full shadow-md'
                    onClick={ () => slider.current?.next() }
                >
                    次へ
                </button>
            </div>
        </>

    )
}

export default Slider