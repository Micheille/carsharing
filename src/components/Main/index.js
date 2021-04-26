import React from 'react'
import Sidebar from '../domain/Sidebar'
import Info from './Info'
import Slider from './Slider'
import './style.css'

export default function Main({menuActive, setMenuActive}) {
    return ( 
    <div className="main-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />        
        <Info />
        <Slider />
    </div>);
}