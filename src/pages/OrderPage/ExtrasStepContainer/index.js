import React from 'react';
import { connect } from 'react-redux';

import ExtrasStep from '../ExtrasStep';
import {
  setDateTimeFrom,
  setDateTimeTo,
  setTariff,
  setIsFullTank,
  setIsBabySeat,
  setIsRightHand,
} from '../../../store/static/actions';
import {
  setColor,
  setReservationFrom,
  setReservationTo,
} from '../../../store/order/actions';

function ExtrasStepContainer(props) {
  const {
    carData,
    color,
    reservationFrom,
    reservationTo,
    dateTimeFrom,
    dateTimeTo,
    tariff,
    isFullTank,
    isBabySeat,
    isRightHand,

    setColor,
    setReservationFrom,
    setReservationTo,
    setDateTimeFrom,
    setDateTimeTo,
    setTariff,
    setIsFullTank,
    setIsBabySeat,
    setIsRightHand,
  } = props;

  return (
    <ExtrasStep
      carData={carData}
      setColor={setColor}
      setReservationFrom={setReservationFrom}
      setReservationTo={setReservationTo}
      setDateTimeFrom={setDateTimeFrom}
      setDateTimeTo={setDateTimeTo}
      setTariff={setTariff}
      setIsFullTank={setIsFullTank}
      setIsBabySeat={setIsBabySeat}
      setIsRightHand={setIsRightHand}
      color={color}
      reservationFrom={reservationFrom}
      reservationTo={reservationTo}
      dateTimeFrom={dateTimeFrom}
      dateTimeTo={dateTimeTo}
      tariff={tariff}
      isFullTank={isFullTank}
      isBabySeat={isBabySeat}
      isRightHand={isRightHand}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    carData: state.order.carData,
    color: state.order.extras.color,
    reservationFrom: state.order.extras.reservationTime.from,
    reservationTo: state.order.extras.reservationTime.to,
    dateFrom: state.order.dateFrom,
    dateTo: state.order.dateTo,
    tariff: state.order.tariff,
    fullTank: state.order.fullTank,
    babySeat: state.order.babySeat,
    rightHand: state.order.rightHand,
  };
};

const mapDispatchToProps = {
  setColor,
  setReservationFrom,
  setReservationTo,
  setDateTimeFrom,
  setDateTimeTo,
  setTariff,
  setIsFullTank,
  setIsBabySeat,
  setIsRightHand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtrasStepContainer);
