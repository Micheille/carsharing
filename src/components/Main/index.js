import React from 'react'
import Sidebar from '../domain/Sidebar'
import Info from './Info'
import './style.css'

export default function Main({menuActive, setMenuActive}) {
    return ( 
    <div className="main-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />        
        <Info />
        <div className="slider"></div>        
    </div>);
}