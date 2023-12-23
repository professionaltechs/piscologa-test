import * as style from "@/styles/secFour.module.css";
import pic1 from "../../public/images/pic1.png";
import pic2 from "../../public/images/pic2.png";
import pic3 from "../../public/images/pic3.png";
import pic4 from "../../public/images/pic4.png";
import pic5 from "../../public/images/pic5.png";
import Image from "next/image";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function SectionFour() {
  return (
    <>
      <div name="sectionFour" className={style.content}>
        <h1 className={style.heading}>Come Lavoro</h1>
        <div className={style.parent}>
          <div className={style.set}>
            <div className={style.img}>
              <Image
                src={pic1}
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h1 className={style.SetInnerHead}>Psicoterapia Individuale</h1>
            <p className={style.SetInnerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque.
            </p>
          </div>
          <div className={style.set}>
            <div className={style.img}>
              <Image
                src={pic2}
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h1 className={style.SetInnerHead}>Psicoterapia di Coppia</h1>
            <p className={style.SetInnerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque.
            </p>
          </div>
          <div className={style.set}>
            <div className={style.img}>
              <Image
                src={pic3}
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h1 className={style.SetInnerHead}>Psicoterapia familiare</h1>
            <p className={style.SetInnerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque.
            </p>
          </div>
          <div className={style.set}>
            <div className={style.img}>
              <Image
                src={pic4}
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h1 className={style.SetInnerHead}>Psicoterapia di Gruppo</h1>
            <p className={style.SetInnerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque.
            </p>
          </div>
          <div className={style.set}>
            <div className={style.img}>
              <Image
                src={pic5}
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h1 className={style.SetInnerHead}>Sostegno Psicologico</h1>
            <p className={style.SetInnerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque.
            </p>
          </div>
        </div>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className={style.btn}>Contattami</button>
        </Link>
      </div>
    </>
  );
}
export default SectionFour;
