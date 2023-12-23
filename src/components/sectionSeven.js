import * as style from "@/styles/secSeven.module.css";
// import { Poppins } from "next/font/google";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function SectionSeven() {
  return (
    <>
      <Head>
        {/* preconnect scripts... */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant&family=Parisienne&family=Playfair+Display&family=Poppins:wght@300&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={poppins.className}>
        <div name="contact" className={style.content}>
          <h1 className={style.heading}>Contattaci</h1>
          {/* <h1 className={poppins.className}>Contattaci</h1> */}
          <form
            name="signup"
            method="POST"
            data-netlify="true"
            // action="/thank-you/"
            // data-netlify-recaptcha="true"
            // onSubmit={submitForm}
            encType="application/x-www-form-urlencoded"
            className="form"
          >
            <input type="hidden" />
            <div className={style.parent}>
              <div className={style.set1}>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Nome e cognome"
                />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Email"
                />
                <textarea
                  type="text"
                  rows={5}
                  className={style.message}
                  placeholder="Messaggio"
                />
                <div className={style.contentEnd}>
                  <h1 className={style.lastText}>Invia</h1>
                  <MdArrowForwardIos className={style.forwardArrow} />
                </div>
              </div>
              <div className={style.set2}>
                <h1 className={style.Set2InnerHead}>
                  Seguimi sui social per <br /> rimanere aggiornato!
                </h1>
                <div className={style.AllIcons}>
                  <FaFacebook className={style.icon} />
                  <FaInstagram className={style.icon} />
                  <FaWhatsapp className={style.icon} />
                </div>
                <a href="tel:555-555-5555 ">
                  <button className={style.btn}>
                    Chiamami <FaPhone className={style.phoneIcon} />
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SectionSeven;
