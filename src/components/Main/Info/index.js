import React from 'react'
import Header from '../../domain/Header'
import Button from '../../domain/Button'
import './style.css'

function MainInfo() {
    return (
        <div className="info__main-info">
            <h1 className="info__title info__title_black">Каршеринг</h1>
            <h1 className="info__title info__title_accent">Need for drive</h1>
            <p>Поминутная аренда авто твоего города</p>
            <Button text="Забронировать" />
        </div>        
    )
}
function Footer() {
    return (
        <div className="info__footer">
            <span className="info__copyright">© 2016-2019 «Need for drive»</span>
            <a className="main-page__link main-page__link_black" href="tel:+7495-234-2244">8 (495) 234-22-44</a>
        </div>
    )
}

export default function Info() {
    return (
    <div className="info">
        <div className="wrapper">
            <Header />
            <MainInfo />
            <Footer />
        </div>
    </div>
    )
}