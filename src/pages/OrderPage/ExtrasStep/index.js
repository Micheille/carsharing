import React from 'react';

import Radio from '../../../components/Radio';
import DateTimePicker from '../../../components/DateTimePicker';
import Checkbox from '../../../components/Checkbox';

import './style.scss';

const plans = [
  { name: 'Поминутно', price: '7 ₽/мин' },
  { name: 'На сутки', price: '1999 ₽/сутки' },
];

const services = [
  { name: 'Полный бак', price: 500 },
  { name: 'Детское кресло', price: 200 },
  { name: 'Правый руль', price: 1600 },
];

export default function ExtrasStep(props) {
  const {
    carData,

    setColor,
    setReservationFrom,
    setReservationTo,
    setPlan,
    setIsFullTank,
    setHasBabySeat,
    setIsRightHand,

    color,
    reservationFrom,
    reservationTo,
    plan,
    isFullTank,
    hasBabySeat,
    isRightHand,
  } = props;

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
          {plans.map((planItem, index) => (
            <li key={index}>
              <Radio
                name='plan'
                id={planItem.name}
                value={planItem.name}
                text={planItem.name}
                checked={planItem.name === plan}
                onChange={(event) => {
                  setPlan(event.target.value);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Доп. услуги</p>

        <ul className='extras-step__service-list'>
          <li>
            <Checkbox
              name='isFullTank'
              id='isFullTank'
              value={isFullTank}
              text='Полный бак'
              checked={isFullTank}
              onChange={(event) => setIsFullTank(event.target.checked)}
            />
          </li>
          <li>
            <Checkbox
              name='hasBabySeat'
              id='hasBabySeat'
              value={hasBabySeat}
              text='Детское кресло'
              checked={hasBabySeat}
              onChange={(event) => setHasBabySeat(event.target.checked)}
            />
          </li>
          <li>
            <Checkbox
              name='isRightHand'
              id='isRightHand'
              value={isRightHand}
              text='Правый руль'
              checked={isRightHand}
              onChange={(event) => setIsRightHand(event.target.checked)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
