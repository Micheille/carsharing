import React from 'react';

import Radio from '../../../components/Radio';
import DateTimePicker from '../../../components/DateTimePicker';

import './style.scss';

const plans = [
  { name: 'Поминутно', price: '7₽/мин' },
  { name: 'На сутки', price: '1999 ₽/сутки' },
];

export default function ExtrasStep(props) {
  const {
    carData,
    setColor,
    setReservationFrom,
    setReservationTo,
    setDateTimeFrom,
    setDateTimeTo,
    setTariff,
    setIsFullTank,
    setIsBabySeat,
    setIsRightHand,

    color,
    reservationFrom,
    reservationTo,
    dateTimeFrom,
    dateTimeTo,
    tariff,
    isFullTank,
    isBabySeat,
    isRightHand,
  } = props;

  const onDateFromChange = (e) => {
    setDateTimeFrom(e.target.value);
  };

  const onDateToChange = (e) => {
    setDateTimeTo(e.target.value);
  };

  const onTariffChange = (e) => {
    setTariff(e.currentTarget.value);
  };

  const onFullTankChange = (e) => {
    setIsFullTank(e.target.checked);
  };

  const onBabySeatChange = (e) => {
    setIsBabySeat(e.target.checked);
  };

  const onRightHandChange = (e) => {
    setIsRightHand(e.target.checked);
  };

  return (
    <div className='order-process-content__step extras-step'>
      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Цвет</p>

        <ul className='extras-step__color-list'>
          <li className='extras-step__color-item'>
            <Radio
              name='color'
              id='Любой'
              value='Любой'
              text='Любой'
              checked={'Любой' === color}
              onChange={(event) => setColor(event.target.value)}
            />
          </li>
          {carData?.colors.map((colorItem, index) => (
            <li key={index} className='extras-step__color-item'>
              <Radio
                name='color'
                id={colorItem}
                value={colorItem}
                text={colorItem}
                checked={colorItem === color}
                onChange={(event) => setColor(event.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Дата аренды</p>

        <div>
          <label htmlFor='date-from'>С</label>
          <DateTimePicker
            id='date-from'
            dateValue={reservationFrom}
            setDateFunction={setReservationFrom}
          />
        </div>

        <div>
          <label htmlFor='date-to'>По</label>
          <DateTimePicker
            id='date-to'
            dateValue={reservationTo}
            setDateFunction={setReservationTo}
          />
        </div>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Тариф</p>

        <ul className='extras-step__plan-list'>
          {plans.map((plan, index) => (
            <li key={index}>
              <Radio
                name='plan'
                id={plan.name}
                value={plan.name}
                text={plan.name}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Доп. услуги</p>

        <input
          type='checkbox'
          name='full-tank'
          checked={isFullTank}
          onClick={onFullTankChange}
        />
        <span>Полный бак</span>

        <input
          type='checkbox'
          name='baby-seat'
          checked={isBabySeat}
          onClick={onBabySeatChange}
        />
        <span>Детское кресло</span>

        <input
          type='checkbox'
          name='right-hand'
          checked={isRightHand}
          onClick={onRightHandChange}
        />
        <span>Правый руль</span>
      </div>
    </div>
  );
}
