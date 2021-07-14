import React from 'react';

import { normalizeImageLink } from '../../../utils/normalizeImageLink';

import './style.scss';

export default function TotalStep(props) {
  const { carData, reservationFrom } = props;

  return (
    <div className='order-process-content__step total-step'>
      <div className='total-step__car'>
        <div className='total-step__car-info'>
          <div className='total-step__model'>{carData.name}</div>
          <div className='total-step__number'>{carData.number}</div>
          <div className='total-step__tank'>
            <span className='total-step__field'>Топливо </span>
            {carData.tank}
          </div>
          <div className='total-step__available'>
            <span className='total-step__field'>Доступна с </span>
            {reservationFrom.toString()}
          </div>
        </div>
        <div className='total-step__car-image'>
          <img src={`${normalizeImageLink(carData.thumbnail.path)}`} alt='' />
        </div>
      </div>
    </div>
  );
}
