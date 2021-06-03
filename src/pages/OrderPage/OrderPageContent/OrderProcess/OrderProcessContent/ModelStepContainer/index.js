import React from 'react';
import { connect } from 'react-redux';

import ModelStep from './ModelStep';
import {
	setCategoryData,
	setCarData,
} from '../../../../../../store/order/actions';

function ModelStepContainer(props) {
	const { categoryData, setCategoryData, carData, setCarData } = props;
	return (
		<ModelStep
			categoryData={categoryData}
			setCategoryData={setCategoryData}
			carData={carData}
			setCarData={setCarData}
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		categoryData: state.order.categoryData,
		carData: state.order.carData,
	};
};

const mapDispatchToProps = {
	setCategoryData,
	setCarData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelStepContainer);
