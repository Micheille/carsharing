import React from 'react';

import './style.scss';


export default function ExtrasStep(props) {
	const {
		setColor,
		setDateTimeFrom,
		setDateTimeTo,
		setTariff,
		setIsFullTank,
		setIsBabySeat,
		setIsRightHand,

		color,
		dateTimeFrom,
		dateTimeTo,
		tariff,
		isFullTank,
		isBabySeat,
		isRightHand,
	} = props;

	const onColorChange = (e) => {
		setColor(e.currentTarget.value);
	};
	const onDateFromChange = (e) => {
		setDateTimeFrom(e.target.value);
	};

	const onDateToChange = (e) => {
		setDateTimeTo(e.target.value);
	};

	const onTariffChange = (e) => {
		setTariff(e.currentTarget.value);
	};

	const onFullTankChange = (e) => {
		setIsFullTank(e.target.checked);
	};

	const onBabySeatChange = (e) => {
		setIsBabySeat(e.target.checked);
	};

	const onRightHandChange = (e) => {
		setIsRightHand(e.target.checked);
	};

	return (
		<div className='order-process-content__step extras-step'>
			<p>Цвет</p>

			<input
				type='radio'
				name='color'
				value='any'
				checked={color === 'any'}
				onChange={onColorChange}
			/>
			<span>Любой</span>

			<input
				type='radio'
				name='color'
				value='red'
				checked={color === 'red'}
				onChange={onColorChange}
			/>
			<span>Красный</span>

			<input
				type='radio'
				name='color'
				value='blue'
				checked={color === 'blue'}
				onChange={onColorChange}
			/>
			<span>Голубой</span>

			<p>Дата аренды</p>

			<span>С</span>
			<input
				type='datetime-local'
				name='datetime-from'
				value={dateTimeFrom}
				onChange={onDateFromChange}
			/>

			<span>По</span>
			<input
				type='datetime-local'
				name='datetime-to'
				value={dateTimeTo}
				onChange={onDateToChange}
			/>

			<p>Тариф</p>

			<input
				type='radio'
				name='tariff'
				value='per-minute'
				checked={tariff === 'per-minute'}
				onChange={onTariffChange}
			/>
			<span>Поминутно</span>

			<input
				type='radio'
				name='tariff'
				value='for-day'
				checked={tariff === 'for-day'}
				onChange={onTariffChange}
			/>
			<span>На сутки</span>

			<p>Доп. услуги</p>

			<input
				type='checkbox'
				name='full-tank'
				checked={isFullTank}
				onClick={onFullTankChange}
			/>
			<span>Полный бак</span>

			<input
				type='checkbox'
				name='baby-seat'
				checked={isBabySeat}
				onClick={onBabySeatChange}
			/>
			<span>Детское кресло</span>

			<input
				type='checkbox'
				name='right-hand'
				checked={isRightHand}
				onClick={onRightHandChange}
			/>
			<span>Правый руль</span>
		</div>
	);
}
