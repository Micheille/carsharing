import React from 'react';
import { connect } from 'react-redux';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
} from 'date-fns';

import OrderButton from '../../../components/OrderButton';

import './style.scss';

const durationToString = (dateFrom, dateTo) => {
  const days = differenceInDays(dateTo, dateFrom);
  const hours = differenceInHours(dateTo, dateFrom) % 24;
  const minutes = differenceInMinutes(dateTo, dateFrom) % 60;

  const durationString = `${days ? days + 'д ' : ''}${
    hours ? hours + 'ч ' : ''
  }${minutes ? minutes + 'мин' : ''}`;

  return durationString;
};

function Overall(props) {
  const { activeStep, setActiveStep } = props;
  const {
    cityData,
    pointData,
    carData,
    color,
    reservationFrom,
    reservationTo,
    rate,
    isFullTank,
    hasBabySeat,
    isRightHand,
  } = props;

  let nextLocationLink = '';
  let orderButtonText = '';
  let disabled = false;

  switch (activeStep) {
    case 0:
      nextLocationLink = '/order/model';
      orderButtonText = 'Выбрать модель';
      disabled = !(cityData && pointData);
      break;
    case 1:
      nextLocationLink = '/order/extra';
      orderButtonText = 'Дополнительно';
      disabled = !carData;
      break;
    case 2:
      nextLocationLink = '/order/total';
      orderButtonText = 'Итого';
      disabled = !(color && reservationFrom && reservationTo && rate);
      break;
    case 3:
      nextLocationLink = '/order/total';
      orderButtonText = 'Заказать'; //!!!!
      break;
    default:
  }

  return (
    <div className='overall'>
      <p className='overall__title'>Ваш заказ:</p>

      <ul className='overall__list'>
        {cityData && pointData ? (
          <li className='overall__item'>
            <span className='overall__hidden'>Пункт выдачи</span>
            <span>{` ${cityData.name} ${pointData.address}`}</span>
          </li>
        ) : (
          <></>
        )}
        {carData ? (
          <li className='overall__item'>
            <span className='overall__hidden'>Модель</span>
            <span>{` ${carData.name}`}</span>
          </li>
        ) : (
          <></>
        )}
        {color ? (
          <li className='overall__item'>
            <span className='overall__hidden'>Цвет</span>
            <span className='overall__media-lowercase overall__color'>{` ${
              color[0].toUpperCase() + color.substring(1)
            }`}</span>
          </li>
        ) : (
          <></>
        )}
        {reservationFrom && reservationTo ? (
          <li className='overall__item'>
            <span className='overall__hidden'>Длительность аренды</span>
            <span>{durationToString(reservationFrom, reservationTo)}</span>
          </li>
        ) : (
          <></>
        )}
        {rate ? (
          <li className='overall__item'>
            <span className='overall__hidden'>Тариф</span>
            <span className='overall__media-lowercase'>{` ${rate.rateTypeId.name}`}</span>
          </li>
        ) : (
          <></>
        )}
        {isFullTank ? (
          <li className='overall__item'>
            <span className='overall__media-lowercase'>Полный бак</span>
            <span className='overall__hidden'>{` Да`}</span>
          </li>
        ) : (
          <></>
        )}
        {hasBabySeat ? (
          <li className='overall__item'>
            <span className='overall__media-lowercase'>Детское кресло</span>
            <span className='overall__hidden'>{` Да`}</span>
          </li>
        ) : (
          <></>
        )}
        {isRightHand ? (
          <li className='overall__item'>
            <span className='overall__media-lowercase'>Правый руль</span>
            <span className='overall__hidden'>{` Да`}</span>
          </li>
        ) : (
          <></>
        )}
      </ul>

      <p className='overall__price'>
        <span className='overall__price-title'>Цена:</span>{' '}
        <span className='overall__price-number'>
          {carData
            ? reservationFrom && reservationTo && rate
              ? `calcutale`
              : `от ${carData.priceMin} до ${carData.priceMax}`
            : '—'}
        </span>
      </p>

      <div className='overall__button'>
        <OrderButton
          text={orderButtonText}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          linkTo={nextLocationLink}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cityData: state.order.cityData,
    pointData: state.order.pointData,
    carData: state.order.carData,
    color: state.order.extras.color,
    reservationFrom: state.order.extras.reservationTime.from,
    reservationTo: state.order.extras.reservationTime.to,
    rate: state.order.extras.rate,
    isFullTank: state.order.extras.service.isFullTank,
    hasBabySeat: state.order.extras.service.hasBabySeat,
    isRightHand: state.order.extras.service.isRightHand,
  };
};

export default connect(mapStateToProps)(Overall);
