import React from 'react'
import style from './Footer.module.css'

const Footer = (props) => {
    const { darkmode } = props




    return (
        <div className={darkmode ? style.footerLight : style.footerDark}>
            <div>
                <a href="https://github.com/EthanLieberman" target="_blank" className={style.items}>
                    <img src={darkmode ? "/GitHubDark.png" : "/GitHubLight.png"} alt="github logo" width={'25px'} />
                    EL
                </a>
            </div>
            <div>
                <a href="https://github.com/schuang25" target="_blank" className={style.items}>
                    <img src={darkmode ? "/GitHubDark.png" : "/GitHubLight.png"} alt="github logo" width={'25px'} />
                    SC
                </a>
            </div>

            <div className={style.items}>
                Apis Used: Google Places | Google Maps | Unofficial Netflix
            </div>
            <div>
                <a href="https://paypal.com" target="_blank" className={style.items}>
                    <img src="/Paypal.png" alt="github logo" width={'25px'} />
                    Donate
                </a>
            </div>

            

        </div>
    )
}

export default Footer