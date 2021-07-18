import React from 'react';

import './style.scss';

export default function Navigation({ activeStep, setActiveStep, orderId }) {
  const navButtons = [
    { text: 'Местоположение' },
    { text: 'Модель' },
    { text: 'Дополнительно' },
    { text: 'Итого' },
  ];

  return (
    <div className='navigation order-process__navigation'>
      <ul className='navigation__list'>
        {orderId ? (
          <div className='navigation__order-number'>{`Заказ номер ${orderId}`}</div>
        ) : (
          navButtons.map((navButton, index) => (
            <li key={index} className='navigation__item'>
              <button
                className={
                  index > activeStep
                    ? 'navigation__button navigation__button_disabled'
                    : index === activeStep
                    ? 'navigation__button navigation__button_active'
                    : 'navigation__button'
                }
                onClick={() => setActiveStep(index)}
              >
                {navButton.text}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
