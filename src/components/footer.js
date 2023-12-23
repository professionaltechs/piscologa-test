import * as style from "@/styles/footer.module.css"
// import navLogo from '../../public/images/navLogo.png'
import navbarLogo from '../../public/images/navbarLogo.png'
import Image from 'next/image'

function footer() {
    return (<>
        <div className={style.content}>
            <div className={style.parent}>
                <div className={style.img}>
                    <Image
                        src={navbarLogo}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ height: "auto", width: '100%' }}
                    />
                </div>
                {/* <div className={style.text}>
                    <h1 className={style.logoHead}>Dott.ssa</h1>
                    <h1 className={style.logoHead2}>annamaria <br />polverinio</h1>
                </div> */}
            </div>
            <div className={style.info}>
                <p className={style.para}>Servizi</p>
                <p className={style.para}>Prova gratuita</p>
                <p className={style.para}>Recensioni</p>
                <p className={style.para}>About</p>
                <p className={style.para}>FAQ</p>
            </div>
        </div>

    </>)
}
export default footer