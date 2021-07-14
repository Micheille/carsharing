import React from 'react';
import { connect } from 'react-redux';

import TotalStep from '../TotalStep';

function TotalStepContainer(props) {
  const { carData, reservationFrom } = props;

  return <TotalStep carData={carData} reservationFrom={reservationFrom} />;
}

const mapStateToProps = (state) => {
  return {
    carData: state.order.carData,
    reservationFrom: state.order.extras.reservationTime.from,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TotalStepContainer);
