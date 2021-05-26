import React from "react";
import { NavLink } from "react-router-dom";

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
			</ul>
		</div>
	);
}
