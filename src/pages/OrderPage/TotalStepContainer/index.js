import React from 'react';
import { connect } from 'react-redux';

import TotalStep from '../TotalStep';

function TotalStepContainer(props) {
  const { carData } = props;

  return <TotalStep carData={carData} />;
}

const mapStateToProps = (state) => {
  return {
    carData: state.order.carData,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TotalStepContainer);
