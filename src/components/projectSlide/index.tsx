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

import './styles.css';



const ProjectSlide = () => {

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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/home.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/products.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/product.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/cart.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/userHome.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/purchase.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/register.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <Image src={"/projects/01/login.png"} alt={"home"} width={1900} height={1080} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProjectSlide