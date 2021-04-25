import React from 'react'
import './style.css'

export default function BurgerMenu({menuActive, setMenuActive}) {
    return (
    <div className="sidebar__burger" onClick={() => setMenuActive(!menuActive)}>
        <span></span>
    </div>)
}