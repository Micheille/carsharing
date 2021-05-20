import React from 'react';

import Sidebar from '../../components/Sidebar';
import OrderPageContent from './OrderPageContent';

import './style.scss';


export default function OrderPage({ menuActive, setMenuActive }) {
    return ( 
    <div className="order-page">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />
        <OrderPageContent menuActive={menuActive} />
    </div>);
}