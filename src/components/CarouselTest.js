import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../../public/images/navbarLogo.png";
import * as style from "./test.module.css";
import secFiveCard from "../../public/images/secFiveCard.png";
import MobileSwiper from "./mobileSwiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
    {/* <div className={style.MobileSwiperResponsive}>
        <MobileSwiper/>
    </div> */}
      <div className={style.content}>
        <h1 className={style.heading}>Attività</h1>

        <div className={style.bodyMain}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* <SwiperSlide> */}
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    // width={0}
                    // height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardMain}>
                <div className={style.cardImg}>
                  <img
                    src={secFiveCard.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={style.cardText}>
                  <p>Titolo orizzontale</p>
                  <h2>Titolo <br /> Progetto</h2>
                  <span>
                    Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer ac mi neque. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer ac mi neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ac mi neque. Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <MobileSwiper/>
      </div>
    </>
  );
}
