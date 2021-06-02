import React from 'react';
import { connect } from 'react-redux';

import OrderButton from '../../../../../../components/OrderButton';

import './style.scss';


function Overall(props) {
	const { activeStep, setActiveStep } = props;
	const {
		cityData,
		pointData,
		carName,
		color,
		dateTimeFrom,
		dateTimeTo,
		tariff,
		isFullTank,
		isBabySeat,
		isRightHand,
	} = props;

	let nextLocationLink = '';
	let orderButtonText = '';
	let disabled = false;

	switch (activeStep) {
		case 0:
			nextLocationLink = '/order/model';
			orderButtonText = 'Выбрать модель';
			disabled = !(cityData && pointData);
			break;
		case 1:
			nextLocationLink = '/order/extra';
			orderButtonText = 'Дополнительно';
			disabled = !carName;
			break;
		case 2:
			nextLocationLink = '/order/total';
			orderButtonText = 'Итого';
			disabled = !(color && dateTimeFrom && dateTimeTo && tariff);
			break;
		case 3:
			nextLocationLink = '/order/total';
			orderButtonText = 'Заказать'; //!!!!
			break;
		default:
	}

	return (
		<div className='overall'>
			<p className='overall__title'>Ваш заказ:</p>

			<ul className='overall__list'>
				{cityData && pointData ? (
					<li className='overall__item'>
						<span className='overall__hidden'>Пункт выдачи</span>
						<span>{` ${cityData.name} ${pointData.address}`}</span>
					</li>
				) : (
					<></>
				)}
				{carName ? (
					<li className='overall__item'>
						<span className='overall__hidden'>Модель</span>
						<span>{` ${carName}`}</span>
					</li>
				) : (
					<></>
				)}
				{color ? (
					<li className='overall__item'>
						<span className='overall__hidden'>Цвет</span>
						<span>{` ${color}`}</span>
					</li>
				) : (
					<></>
				)}
				{dateTimeFrom && dateTimeTo ? (
					<li className='overall__item'>
						<span className='overall__hidden'>Длительность аренды</span>
						<span>{` ${new Date(dateTimeTo) - new Date(dateTimeFrom)}`}</span>
					</li>
				) : (
					<></>
				)}
				{tariff ? (
					<li className='overall__item'>
						<span className='overall__hidden'>Тариф</span>
						<span>{` ${tariff}`}</span>
					</li>
				) : (
					<></>
				)}
				{isFullTank ? (
					<li className='overall__item'>
						<span className='overall__lowercase'>Полный бак</span>
						<span className='overall__hidden'>{` Да`}</span>
					</li>
				) : (
					<></>
				)}
				{isBabySeat ? (
					<li className='overall__item'>
						<span className='overall__lowercase'>Детское кресло</span>
						<span className='overall__hidden'>{` Да`}</span>
					</li>
				) : (
					<></>
				)}
				{isRightHand ? (
					<li className='overall__item'>
						<span className='overall__lowercase'>Правый руль</span>
						<span className='overall__hidden'>{` Да`}</span>
					</li>
				) : (
					<></>
				)}
			</ul>

			<p className='overall__price'>
				<span className='overall__price-title'>Цена:</span> от 8 000 до 12 000
			</p>

			<OrderButton
				text={orderButtonText}
				activeStep={activeStep}
				setActiveStep={setActiveStep}
				linkTo={nextLocationLink}
				disabled={disabled}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cityData: state.order.cityData,
		pointData: state.order.pointData,
		carName: state.order.carName,
		color: state.order.color,
		dateTimeFrom: state.order.dateTimeFrom,
		dateTimeTo: state.order.dateTimeTo,
		tariff: state.order.tariff,
		isFullTank: state.order.isFullTank,
		isBabySeat: state.order.isBabySeat,
		isRightHand: state.order.isRightHand,
	};
};

export default connect(mapStateToProps)(Overall);
