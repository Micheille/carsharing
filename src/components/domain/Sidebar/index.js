import React from 'react'

import Menu from './Menu'
import BurgerMenu from "./BurgerMenu"
import LangButton from "./LangButton"

import './style.scss'

export default function Sidebar({menuActive, setMenuActive}) {
    return (
    <div className="sidebar">
        <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        <Menu isActive={menuActive} setActive={setMenuActive} />
        <LangButton />
    </div>)
}