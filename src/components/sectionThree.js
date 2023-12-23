import * as style from "@/styles/secThree.module.css"
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

function SectionThree() {
    return (
        <>
            <div name="sectionThree" className={style.content}>
                <h1 name="heroBtn" className={style.heading}>Cosa Tratto</h1>
                <div className={style.item}>
                    <div className={style.box}>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Depressione</p>
                        </div>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Depressione</p>
                        </div>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Depressione</p>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Disturbi cronici</p>
                        </div>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Disturbi cronici</p>
                        </div>
                        <div className={style.ItemInfo}>
                            <TiTick className={style.icon} />
                            <p className={style.para}>Disturbi cronici</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionThree