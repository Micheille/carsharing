import React from 'react';
import { connect } from 'react-redux';

import LocationStep from './LocationStep';
import { setCityData, setPointData } from '../../../../../../store/order/actions';

function LocationStepContainer(props) {
	const { cityData, pointData, setCityData, setPointData } = props;
	return (
		<LocationStep
			cityData={cityData}
			setCityData={setCityData}
			pointData={pointData}
			setPointData={setPointData}
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		cityData: state.order.cityData,
		pointData: state.order.pointData,
	};
};

const mapDispatchToProps = {
	setCityData,
	setPointData,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationStepContainer);
