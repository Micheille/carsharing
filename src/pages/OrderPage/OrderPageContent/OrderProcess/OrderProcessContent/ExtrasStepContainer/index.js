import React from 'react';
import { connect } from 'react-redux';

import ExtrasStep from './ExtrasStep';
import {
	setColor,
	setDateTimeFrom,
	setDateTimeTo,
	setTariff,
	setIsFullTank,
	setIsBabySeat,
	setIsRightHand,
} from '../../../../../../store/static/actions';


function ExtrasStepContainer(props) {
	const {
		color,
		dateTimeFrom,
		dateTimeTo,
		tariff,
		isFullTank,
		isBabySeat,
		isRightHand,

		setColor,
		setDateTimeFrom,
		setDateTimeTo,
		setTariff,
		setIsFullTank,
		setIsBabySeat,
		setIsRightHand,
	} = props;

	return (
		<ExtrasStep
			setColor={setColor}
			setDateTimeFrom={setDateTimeFrom}
			setDateTimeTo={setDateTimeTo}
			setTariff={setTariff}
			setIsFullTank={setIsFullTank}
			setIsBabySeat={setIsBabySeat}
			setIsRightHand={setIsRightHand}

			color={color}
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
		color: state.order.color,
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
