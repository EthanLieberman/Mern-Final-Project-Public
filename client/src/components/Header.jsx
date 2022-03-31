import React from 'react'
import style from './Header.module.css'

const Header = (props) => {

    const {modeSelect, darkmode} = props
    return (
        <div className={style.header}>
            <div style={{width: '100px'}}></div>
            {/* <h1>HungR</h1> */}
            {
            darkmode?       // checks weather darkmode is true or false and renders the opposite button to change states
            <>
            <img src='/LogoDark.png' alt="logo" className={style.logo} />
            <button className={style.darkmode} onClick={(e) => modeSelect()}>Light Mode🔆</button>
            </>
            : <>
            <img src='/LogoLight.png' alt="logo" className={style.logo} />
            <button className={style.lightmode} onClick={(e) => modeSelect()}>Dark Mode🌒</button>
            </>
        }
            
        </div>
    )
}

export default Header