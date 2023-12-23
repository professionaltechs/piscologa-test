import { FAQData } from "@/data";
import * as style from "@/styles/secSix.module.css";

import { useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function SectionSix() {
  const [lighttextOff, setLighttextOff] = useState(
    Array(FAQData.length).fill(true)
  );

  console.log(lighttextOff)

  const handleToggle = (index) => {
    setLighttextOff((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <>
      <div className={style.content}>
        <h1 className={style.heading}>FAQ</h1>
        <div className={style.InnerContent}>
          {FAQData.map((faq, index) => (
            <div className={style.set} key={faq.no}>
              <div>
                <p className={style.text}>{faq.text}</p>
                <p
                  className={style.lightText}
                  style={
                    !lighttextOff[index]
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {faq.lightText}
                </p>
              </div>
              {!lighttextOff[index] ? 
              <FaAngleUp
              className={style.icon}
              onClick={() => handleToggle(index)}
            />: 
            <FaAngleDown
                className={style.icon}
                onClick={() => handleToggle(index)}
              />}
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SectionSix;
