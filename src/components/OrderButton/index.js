import React from 'react';

import './style.scss';

export default function OrderButton({
  text,
  activeStep,
  setActiveStep,
  disabled,
  onClick,
}) {
  return (
    <button
      className={
        disabled
          ? 'order-button order-button_disabled'
          : activeStep === 4
          ? 'order-button order-button_deny'
          : 'order-button'
      }
      onClick={onClick || (() => setActiveStep(activeStep + 1))}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
