import React from "react";
import { connect } from "react-redux";

import ExtrasStep from "./ExtrasStep";
import {
	setColor,
	setDateFrom,
	setDateTo,
	setTariff,
	setFullTank,
	setBabySeat,
	setRightHand,
} from "../../../../../../store/extras/actions";

function ExtrasStepContainer(props) {
	const {
		color,
		dateFrom,
		dateTo,
		tariff,
		fullTank,
		babySeat,
		rightHand,
		setColor,
		setDateFrom,
		setDateTo,
		setTariff,
		setFullTank,
		setBabySeat,
		setRightHand,
	} = props;

	return (
		<ExtrasStep
			setColor={setColor}
			setDateFrom={setDateFrom}
			setDateTo={setDateTo}
			setTariff={setTariff}
			setFullTank={setFullTank}
			setBabySeat={setBabySeat}
			setRightHand={setRightHand}
			color={color}
			dateFrom={dateFrom}
			dateTo={dateTo}
			tariff={tariff}
			fullTank={fullTank}
			babySeat={babySeat}
			rightHand={rightHand}
		/>
	);
}

const mapStateToProps = (state) => {
	return {
		color: state.extras.color,
		dateFrom: state.extras.dateFrom,
		dateTo: state.extras.dateTo,
		tariff: state.extras.tariff,
		fullTank: state.extras.fullTank,
		babySeat: state.extras.babySeat,
		rightHand: state.extras.rightHand,
	};
};

const mapDispatchToProps = {
	setColor,
	setDateFrom,
	setDateTo,
	setTariff,
	setFullTank,
	setBabySeat,
	setRightHand,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExtrasStepContainer);
