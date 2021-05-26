import React, { useCallback } from "react";

import "./style.scss";

export default function ExtrasStep(props) {
	const {
		setColor,
		setDateFrom,
		setDateTo,
		setTariff,
		setFullTank,
		setBabySeat,
		setRightHand,
		color,
		dateFrom,
		dateTo,
		tariff,
		fullTank,
		babySeat,
		rightHand,
	} = props;

	const onColorChange = useCallback(
		(e) => {
			setColor(e.currentTarget.value);
		},
		[props]
	);

	const onDateFromChange = useCallback(
		(e) => {
			setDateFrom(e.target.value);
		},
		[props]
	);

	const onDateToChange = useCallback(
		(e) => {
			setDateTo(e.target.value);
		},
		[props]
	);

	const onTariffChange = useCallback(
		(e) => {
			setTariff(e.currentTarget.value);
		},
		[props]
	);

	const onFullTankChange = useCallback(
		(e) => {
			setFullTank(e.target.checked);
		},
		[props]
	);

	const onBabySeatChange = useCallback(
		(e) => {
			setBabySeat(e.target.checked);
		},
		[props]
	);

	const onRightHandChange = useCallback(
		(e) => {
			setRightHand(e.target.checked);
		},
		[props]
	);

	return (
		<div className="order-process-content__step extras-step">
			<p>Цвет</p>

			<input
				type="radio"
				name="color"
				value="any"
				checked={color === "any"}
				onChange={onColorChange}
			/>
			<span>Любой</span>

			<input
				type="radio"
				name="color"
				value="red"
				checked={color === "red"}
				onChange={onColorChange}
			/>
			<span>Красный</span>

			<input
				type="radio"
				name="color"
				value="blue"
				checked={color === "blue"}
				onChange={onColorChange}
			/>
			<span>Голубой</span>

			<p>Дата аренды</p>

			<span>С</span>
			<input
				type="datetime-local"
				name="datetime-from"
				value={dateFrom}
				onChange={onDateFromChange}
			/>

			<span>По</span>
			<input
				type="datetime-local"
				name="datetime-to"
				value={dateTo}
				onChange={onDateToChange}
			/>

			<p>Тариф</p>

			<input
				type="radio"
				name="tariff"
				value="per-minute"
				checked={tariff === "per-minute"}
				onChange={onTariffChange}
			/>
			<span>Поминутно</span>

			<input
				type="radio"
				name="tariff"
				value="for-day"
				checked={tariff === "for-day"}
				onChange={onTariffChange}
			/>
			<span>На сутки</span>

			<p>Доп. услуги</p>

			<input
				type="checkbox"
				name="full-tank"
				checked={fullTank}
				onClick={onFullTankChange}
			/>
			<span>Полный бак</span>

			<input
				type="checkbox"
				name="baby-seat"
				checked={babySeat}
				onClick={onBabySeatChange}
			/>
			<span>Детское кресло</span>

			<input
				type="checkbox"
				name="right-hand"
				checked={rightHand}
				onClick={onRightHandChange}
			/>
			<span>Правый руль</span>
		</div>
	);
}
