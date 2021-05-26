import React from "react";
import { NavLink } from "react-router-dom";

//import arrow from "../../../../../assets/vector/arrow.svg";

import "./style.scss";


export default function Navigation({ activeStep, setActiveStep }) {
	const navLinks = [
		{ text: "Местоположение", link: "location" },
		{ text: "Модель", link: "model" },
		{ text: "Дополнительно", link: "extra" },
		{ text: "Итого", link: "total" },
	];

	return (
		<div className="navigation order-process__navigation">
			<ul>
				{navLinks.map((navLink, index) => (
					<li key={index}>
						<NavLink
							className={
								index > activeStep
									? "navigation__link navigation__link_disabled"
									: "navigation__link"
							}
							activeClassName="navigation__link_active"
							to={`/order/${navLink.link}`}
							onClick={() => setActiveStep(index)}
						>
							{navLink.text}
						</NavLink>
					</li>
				))}
				{/* <li className="navigation__arrow"><img alt="" src={arrow} /></li> */}
				{/* <li>
                    <NavLink className={ 0 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/location"
                             onClick={() => setActiveStep(0)}
                    >
                             Местоположение
                    </NavLink>
                </li>
                
                <li className="navigation__arrow"><img alt src={arrow} /></li>

                <li>
                    <NavLink className={ 1 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/model"
                             onClick={() => setActiveStep(1)}
                    >
                             Модель
                    </NavLink>
                </li>

                <li className="navigation__arrow"><img alt src={arrow} /></li>

                <li>
                    <NavLink className={ 2 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/extra"
                             onClick={() => setActiveStep(2)}
                    >
                             Дополнительно
                    </NavLink>
                </li>

                <li className="navigation__arrow"><img alt src={arrow} /></li>

                <li>
                    <NavLink className={ 3 > activeStep ? "navigation__link navigation__link_disabled" : "navigation__link"}
                             activeClassName="navigation__link_active"
                             to="/order/total"
                             onClick={() => setActiveStep(3)}
                    >
                             Итого
                    </NavLink>
                </li> */}
			</ul>
		</div>
	);
}
