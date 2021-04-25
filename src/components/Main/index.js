import React from 'react'
import Sidebar from '../domain/Sidebar'
import "./style.css"

export default function Main({menuActive, setMenuActive}) {
    return ( 
    <div className="main-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />        
        <div className="info"></div>
        <div className="slider"></div>        
    </div>);
}