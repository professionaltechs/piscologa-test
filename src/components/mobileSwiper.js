"use client";
import Image from "next/image";
import secFiveCard from "../../public/images/secFiveCard.png";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper from 'swiper/swiper-bundle.mjs';
// import "swiper/swiper-bundle.css";

import * as style from "@/styles/secFive.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MobileSwiper() {
  return (
    <>
      {/* <div className={style.carouselContainer}>
        <Carousel
          centerMode={true}
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          // centerSlidePercentage={70}
        >
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
          <div className={style.mobile_cardMain}>
            <div className={style.mobile_cardImg}>
              <Image
                src={secFiveCard.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "231px",
                  borderRadius: "16px"
                }}
              />
            </div>
            <div className={style.mobile_cardText}>
              <p>Titolo orizzontale</p>
              <h2>Titolo Progetto</h2>
              <span>
                Titolo orizzontale Titolo Progetto Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer ac mi neque. Maecenas
                mauris sem, consectetur ac cursus a, auctor sit amet mi.
              </span>
            </div>
          </div>
        </Carousel>
      </div> */}
    </>
  );
}
export default MobileSwiper;
