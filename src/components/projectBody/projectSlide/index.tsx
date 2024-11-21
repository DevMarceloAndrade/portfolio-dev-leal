'use client'
import { Navigation, Pagination, Zoom, EffectCube, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';


export interface ImageSlideProps {
    src: string,
    alt: string
}
export interface ProjectSlideProps {
    images: ImageSlideProps[]
}
const ProjectSlide = ({images}: ProjectSlideProps) => {

    return (
        <>
            <Swiper
                effect={'cube'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                
                rewind={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    
                }}
                zoom={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                
                modules={[EffectCube, Navigation, Pagination, Zoom, Autoplay]}
                className="w-full lg:w-2/4"
            >
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index} className='bg-center bg-cover'>
                                <div className='swiper-zoom-container' >
                                    <Image className='w-full block' src={image.src} alt={image.alt} width={1900} height={1080}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default ProjectSlide