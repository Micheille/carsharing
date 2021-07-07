import React from 'react';
import { connect } from 'react-redux';

import LocationStep from '../LocationStep';
import { setCityData, setPointData } from '../../../store/order/actions';
import { setCities, setPoints } from '../../../store/data/actions';

function LocationStepContainer(props) {
  const {
    cityData,
    pointData,
    setCityData,
    setPointData,
    cities,
    setCities,
    points,
    setPoints,
  } = props;
  return (
    <LocationStep
      cityData={cityData}
      setCityData={setCityData}
      pointData={pointData}
      setPointData={setPointData}
      cities={cities}
      setCities={setCities}
      points={points}
      setPoints={setPoints}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    cityData: state.order.cityData,
    pointData: state.order.pointData,
    cities: state.data.citiesData,
    points: state.data.pointsData,
  };
};

const mapDispatchToProps = {
  setCityData,
  setPointData,
  setCities,
  setPoints,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationStepContainer);
