import React from 'react';
import TextField from '@material-ui/core/TextField';

import Radio from '../../../components/Radio';
import DateTimePicker from '../../../components/DateTimePicker';

import './style.scss';

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
              type='radio'
              name='color'
              id='Любой'
              value='Любой'
              checked={'Любой' === color}
              onChange={(event) => setColor(event.target.value)}
            />
          </li>
          {carData?.colors.map((colorItem, index) => (
            <li key={index} className='extras-step__color-item'>
              <Radio
                type='radio'
                name='color'
                id={colorItem}
                value={colorItem}
                checked={colorItem === color}
                onChange={(event) => setColor(event.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Дата аренды</p>

        {/* <DateTimePicker /> */}

        <span>С</span>
        <input
          type='datetime-local'
          name='datetime-from'
          value={reservationFrom}
          onChange={(event) => setReservationFrom(event.target.value)}
        />

        <span>По</span>
        <input
          type='datetime-local'
          name='datetime-to'
          value={reservationTo}
          onChange={(event) => setReservationTo(event.target.value)}
        />
      </div>

      <p>Тариф</p>

      <input
        type='radio'
        name='tariff'
        value='per-minute'
        checked={tariff === 'per-minute'}
        onChange={onTariffChange}
      />
      <span>Поминутно</span>

      <input
        type='radio'
        name='tariff'
        value='for-day'
        checked={tariff === 'for-day'}
        onChange={onTariffChange}
      />
      <span>На сутки</span>

      <p>Доп. услуги</p>

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
  );
}
