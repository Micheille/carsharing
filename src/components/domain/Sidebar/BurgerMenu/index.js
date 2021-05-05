import React from 'react'
import './style.scss'

export default function BurgerMenu({menuActive, setMenuActive}) {
    return (
    <div className={menuActive ? "sidebar__burger sidebar__burger_active" : "sidebar__burger"} onClick={() => setMenuActive(!menuActive)}>
        <span></span>
    </div>)
}