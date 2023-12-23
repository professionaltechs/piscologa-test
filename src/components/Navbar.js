import * as style from "../styles/navbar.module.css";
import navLogo from "../../public/images/navLogo.png";
import navbarLogo from "../../public/images/navbarLogo.png";
import Image from "next/image";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { TbMessage2Search } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { useRef } from "react";

function Navbar() {
  const toogleMobNav = useRef();
  // const x = document.getElementById("overlay");
  const toggleOverlay = () => {
    const mobileMenuDropdown = toogleMobNav.current;
    const currentDisplay = window.getComputedStyle(mobileMenuDropdown).display;

    // Toggle display: block/none based on the current state
    mobileMenuDropdown.style.height = 
    mobileMenuDropdown.style.height == '0px' ? '308px' : '0px'

  };
  return (
    <>
      {/* <div className={style.nav}>
        <div className={style.phoneLogo}>
          <span>
            <LuPhone />
          </span>
        </div>

        <div className={style.parent}>
          <div className={style.img}>
            <Image
              src={navLogo}
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className={style.text}>
            <h1 className={style.logoHead}>Dott.ssa</h1>
            <h1 className={style.logoHead2}>
              annamaria <br />
              polverinio
            </h1>
          </div>
        </div>
        <div className={style.menuLogo}>
          <span>
            <IoIosMenu />
          </span>
        </div>
        <div className={style.center}>
          <div className={style.item}>
            <Link
              activeClass="active"
              to="sectionOne"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>home</p>
            </Link>

            <span>
              {" "}
              <TbMessage2Search />{" "}
            </span>
          </div>
          <Link
              activeClass="active"
              to="sectionFour"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
          <p className={style.para2}>come lavoro</p>
          </Link>
          <Link
              activeClass="active"
              to="sectionThree"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
          <p className={style.para2}>cosa tratto</p>
          </Link>
          <Link
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
          <p className={style.para2}>chi sono</p>
          </Link>


          <p className={style.para2}>domande frequenti</p>
        </div>
        <div className={style.right}>
        <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
            >
          <button className={style.btn}>contattami</button>
          </Link>
        </div>
      </div> */}

      <nav className={style.Navbar}>
        <div className={style.navbarLeft}>
          <Image
            src={navbarLogo}
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className={style.navbarCenter}>
          <div className={`${style.item}`}>
            <Link
              activeClass="active"
              to="sectionOne"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Home</p>
            </Link>
            <span>
              <TbMessage2Search />
            </span>
          </div>
          <div className={style.navbarCenterItem}>
            <Link
              activeClass="active"
              to="sectionFour"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Come Lavoro</p>
            </Link>
          </div>
          <div className={style.navbarCenterItem}>
            <Link
              activeClass="active"
              to="sectionThree"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Cosa Tratto</p>
            </Link>
          </div>
          <div className={style.navbarCenterItem}>
            <Link
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Chi sono</p>
            </Link>
          </div>
          <div className={style.navbarCenterItem}>
            <Link
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Domande Frequenti</p>
            </Link>
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
          <button>Contattami</button>
        </Link>
      </nav>

      <div className={style.Mobile_nav}>
        <div className={style.Mobile_navLeft}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <LuPhone />
          </Link>
        </div>
        <div className={style.Mobile_navCenter}>
          <Image
            src={navbarLogo}
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className={style.Mobile_navRight}>
          <IoIosMenu onClick={toggleOverlay} />
        </div>
      </div>
      <div className={style.mobileMenuDropdownParent} ref={toogleMobNav}>
      <div className={style.mobileMenuDropdown} >
        <div className={style.mobileMenuItem}>
          <div>
            <Link
              activeClass="active"
              to="sectionOne"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Home</p>
            </Link>
            <span>
              <TbMessage2Search />
            </span>
          </div>
          <div>
            <Link
              activeClass="active"
              to="sectionFour"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Come lavoro</p>
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="sectionThree"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Cosa Tratto</p>
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Chi Sono</p>
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="sectionTwo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Domande Frequenti</p>
            </Link>
          </div>
        </div>

        <button>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contattami
          </Link>
        </button>
      </div>
      </div>
    </>
  );
}

export default Navbar;
