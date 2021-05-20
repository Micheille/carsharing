import React from 'react'
import { NavLink } from 'react-router-dom'

import arrow from '../../../../../assets/vector/arrow.svg'

import './style.scss'


export default function Navigation({activeStep, setActiveStep}) {
    return (
        <div className="navigation order-process__navigation">
            <ul>
                <li>
                    <NavLink className={ 0 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/location"
                             onClick={() => setActiveStep(0)}
                    >
                             Местоположение
                    </NavLink>
                </li>
                
                <li className="navigation__arrow"><img src={arrow} /></li>

                <li>
                    <NavLink className={ 1 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/model"
                             onClick={() => setActiveStep(1)}
                    >
                             Модель
                    </NavLink>
                </li>

                <li className="navigation__arrow"><img src={arrow} /></li>

                <li>
                    <NavLink className={ 2 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/extra"
                             onClick={() => setActiveStep(2)}
                    >
                             Дополнительно
                    </NavLink>
                </li>

                <li className="navigation__arrow"><img src={arrow} /></li>

                <li>
                    <NavLink className={ 3 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/total"
                             onClick={() => setActiveStep(3)}
                    >
                             Итого
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}