import React from 'react'

import Sidebar from '../../components/Sidebar'
import Info from './Info'
import Slider from './Slider'

import './style.scss'


export default function MainPage({menuActive, setMenuActive}) {
    return ( 
    <div className="main-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />        
        <Info />
        <Slider />
    </div>);
}