import React from 'react';
import { connect } from 'react-redux';

import ExtrasStep from '../ExtrasStep';
import {
  setColor,
  setReservationFrom,
  setReservationTo,
  setPlan,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
} from '../../../store/order/actions';

function ExtrasStepContainer(props) {
  const {
    carData,
    color,
    reservationFrom,
    reservationTo,
    plan,
    isFullTank,
    hasBabySeat,
    isRightHand,

    setColor,
    setReservationFrom,
    setReservationTo,
    setPlan,
    setIsFullTank,
    setHasBabySeat,
    setIsRightHand,
  } = props;

  return (
    <ExtrasStep
      carData={carData}
      setColor={setColor}
      setReservationFrom={setReservationFrom}
      setReservationTo={setReservationTo}
      setPlan={setPlan}
      setIsFullTank={setIsFullTank}
      setHasBabySeat={setHasBabySeat}
      setIsRightHand={setIsRightHand}
      color={color}
      reservationFrom={reservationFrom}
      reservationTo={reservationTo}
      plan={plan}
      isFullTank={isFullTank}
      hasBabySeat={hasBabySeat}
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
    plan: state.order.extras.plan,
    isFullTank: state.order.extras.service.isFullTank,
    hasBabySeat: state.order.extras.service.hasBabySeat,
    isRightHand: state.order.extras.service.isRightHand,
  };
};

const mapDispatchToProps = {
  setColor,
  setReservationFrom,
  setReservationTo,
  setPlan,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtrasStepContainer);
