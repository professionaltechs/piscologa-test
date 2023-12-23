"use client";

import * as style from "@/styles/secFive.module.css";
// import MobileSwiper from '@/components/mobileSwiper'

import Image from "next/image";
import secFiveCard from "../../public/images/secFiveCard.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';

function sectionFive() {
  return (
    <>
      <div className={style.content}>
        <h1 className={style.heading}>Attività</h1>

        <div className={style.bodyMain}>
          {/* <MobileSwiper/> */}

          {/* <Swiper
                        spaceBetween={50}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        loop
                        
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Pagination]} 
                    >
                        <SwiperSlide>
                            <div className={style.cardMain}>
                                <div className={style.cardImg}>
                                    <Image
                                        src={secFiveCard.src}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto', objectFit: "cover", maxHeight: "331px" }}
                                    />
                                </div>
                                <div className={style.cardText}>
                                    <p>Titolo orizzontale</p>
                                    <h2>Titolo Progetto</h2>
                                    <span>Titolo orizzontale
                                        Titolo Progetto
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.cardMain}>
                                <div className={style.cardImg}>
                                    <Image
                                        src={secFiveCard.src}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto', objectFit: "cover", maxHeight: "331px" }}
                                    />
                                </div>
                                <div className={style.cardText}>
                                    <p>Titolo orizzontale</p>
                                    <h2>Titolo Progetto</h2>
                                    <span>Titolo orizzontale
                                        Titolo Progetto
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={style.cardMain}>
                                <div className={style.cardImg}>
                                    <Image
                                        src={secFiveCard.src}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto', objectFit: "cover", maxHeight: "331px" }}
                                    />
                                </div>
                                <div className={style.cardText}>
                                    <p>Titolo orizzontale</p>
                                    <h2>Titolo Progetto</h2>
                                    <span>Titolo orizzontale
                                        Titolo Progetto
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit amet.</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        
                    </Swiper> */}
          {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            
          </Swiper> */}
        </div>
      </div>
    </>
  );
}
export default sectionFive;
