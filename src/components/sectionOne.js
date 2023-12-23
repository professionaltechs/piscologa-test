import * as style from "@/styles/secOne.module.css";
// import sectionOneBG from '../../public/images/sectionOneBG.png'
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
  } from "react-scroll";

function SectionOne() {
  return (
    <>
      <div name="sectionOne" className={style.SectionOneMain}>
        <div className={style.SectionOneInner}>
          <div className={style.SectionOneInnerText}>
            <h4>Dott.ssa</h4>
            <h1>Annamaria <br/> Polverino</h1>
            <h6>Psicoterapeuta Sistemico-Relazionale</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac mi neque. Maecenas mauris sem, consectetur ac cursus a, auctor
              sit amet mi.
            </p>
            <Link
              activeClass="active"
              to="heroBtn"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              >
                <button>Scopri di più</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionOne;
