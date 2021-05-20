import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';


export default function OrderButton({ text, activeStep, setActiveStep, linkTo, disabled }) {
    return (
        <Link to={linkTo}>
            <button
                className={ disabled? "order-button order-button_disabled" : "order-button"}
                onClick={() => setActiveStep(activeStep + 1)}
                disabled={disabled}
		    >
                {text}
		    </button>
        </Link>		
	);
}