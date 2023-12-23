import * as style from "@/styles/secTwo.module.css";
import SectionTwoSideImg from "../../public/images/SectionTwoSideImg.png";
import Image from "next/image";
import secTwoResponsiveImg from "../../public/images/secTwoResponsiveImg.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function SectionTwo() {
  return (
    <>
      <div name="sectionTwo" className="content">
        <h1 className={style.heading}>Chi Sono</h1>
        <div className={style.parent}>
          <div className={style.img}>
            <Image
              src={SectionTwoSideImg}
              width={0}
              height={0}
              style={{ objectFit: "cover", height: "auto", width: "70%" }}
            />
          </div>
          <div className={style.responsiveImg}>
            <Image
              src={secTwoResponsiveImg}
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "cover", height: "auto", width: "100%" }}
            />
          </div>
          <div className={style.text}>
            <h1 className={style.SectionTwoTextHead1}>Dott.ssa</h1>
            <h1 className={style.SectionTwoTextHead2}>
              annamaria <br />
              polverino
            </h1>
            <p className={style.SectionTwoTextPara1}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              veniam dolor possimus accusamus officia provident impedit,
              repudiandae minima iure harum cumque ad quas eligendi magni
              laudantium velit ratione recusandae sed?
            </p>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
            <button className={style.btn}>contattami</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionTwo;
