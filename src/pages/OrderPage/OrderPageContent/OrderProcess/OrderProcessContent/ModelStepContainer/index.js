import React from 'react';
import { connect } from 'react-redux';

import ModelStep from './ModelStep';
import {
	setCategoryId,
	setCarId,
} from '../../../../../../store/dynamic/actions';
import { setCarName } from '../../../../../../store/static/actions';


function ModelStepContainer(props) {
	const { server, categoryId, carId, setCategoryId, setCarId, setCarName } =
		props;
	return (
		<ModelStep
			server={server}
			carId={carId}
			categoryId={categoryId}
			setCategoryId={setCategoryId}
			setCarId={setCarId}
			setCarName={setCarName}
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		server: state.api.server,
		categoryId: state.api.categoryId,
		carId: state.api.carId,
	};
};

const mapDispatchToProps = {
	setCategoryId,
	setCarId,
	setCarName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelStepContainer);
