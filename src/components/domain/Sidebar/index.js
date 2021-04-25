import React from 'react'
import Menu from './Menu'
import BurgerMenu from "./BurgerMenu"
import LangButton from "./LangButton"
import './style.css'

export default function Sidebar({menuActive, setMenuActive}) {
    return (
    <div className="sidebar">
        <Menu isActive={menuActive} setActive={setMenuActive} />
        <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        <LangButton />
    </div>)
}