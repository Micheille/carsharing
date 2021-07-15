import React from 'react';

import './style.scss';

export default function Navigation({ activeStep, setActiveStep }) {
  const navButtons = [
    { text: 'Местоположение', link: 'location' },
    { text: 'Модель', link: 'model' },
    { text: 'Дополнительно', link: 'extra' },
    { text: 'Итого', link: 'total' },
  ];

  return (
    <div className='navigation order-process__navigation'>
      <ul className='navigation__list'>
        {navButtons.map((navButton, index) => (
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
        ))}
      </ul>
    </div>
  );
}
