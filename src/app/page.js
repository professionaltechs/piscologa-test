"use client";

import Navbar from "@/components/Navbar";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";
import SectionThree from "@/components/sectionThree";
import SectionFour from "@/components/sectionFour";
import SectionFive from "@/components/sectionFive";
import SectionSix from "@/components/sectionSix";
import SectionSeven from "@/components/sectionSeven";
import Footer from "@/components/footer";

import CarouselTest from "@/components/CarouselTest";

import { Poppins } from "next/font/google";
import MobileSwiper from "@/components/mobileSwiper";
import { useEffect, useState } from "react";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style> */}
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* {windowWidth < 768 ? <MobileSwiper /> : } */}
      {/* <MobileSwiper />  */}
      {/* <SectionFive /> */}
      <CarouselTest />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
}
