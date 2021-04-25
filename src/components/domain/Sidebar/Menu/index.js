import React from 'react'
// import { a } from 'react-router-dom'
import "./style.css"

export default function Menu({isActive, setActive}) {
    return (
    <nav className={isActive ? "sidebar__menu sidebar__menu_active" : "sidebar__menu"}>
        <div className="sidebar__sidebar"></div>

        <div className="sidebar__opaque">
            <ul className="sidebar__list">
                <li><a className="main-page__link sidebar__link main-page__link_white" href="#">Парковка</a></li>
                <li><a className="main-page__link sidebar__link main-page__link_white" href="#">Страховка</a></li>
                <li><a className="main-page__link sidebar__link main-page__link_white" href="#">Бензин</a></li>
                <li><a className="main-page__link sidebar__link main-page__link_white" href="#">Обслуживание</a></li>

                <ul className="sidebar__social">
                    <li><a href="#">Телега</a></li>
                    <li><a href="#">Фейсбук</a></li>
                    <li><a href="#">Инста</a></li>
                </ul>
            </ul>
        </div>

        <div className="sidebar__transparent"></div>
    </nav>);
}