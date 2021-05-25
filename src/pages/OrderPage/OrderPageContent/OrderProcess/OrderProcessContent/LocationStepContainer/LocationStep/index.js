import React, { useCallback, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./style.scss";

export default function LocationStep(props) {
	const [points, setPoints] = useState([]);
	const [error, setError] = useState("");

	let cities = points.map((point) => point.cityId?.name);
	cities = cities.filter(Boolean);
	const citiesSet = new Set(cities);
	let citiesSelectFrom = [...citiesSet];

	//console.log(points);
	const pointsFiltered = points.filter(point => point.cityId.name === props.city);
	const addressesSelectFrom = pointsFiltered.map(point => point.address);
	//console.log(addressesSelectFrom);

	// const pointsProps = {
	// 	options: addressesSelectFrom,
	// 	getOptionLabel: (option) => option.title,
	// };

	const onCityChange = useCallback((e) => {
		props.setCity(e.target.textContent);
	}, []);

	const onPointChange = useCallback((e) => {
		props.setPoint(e.target.textContent);
	}, []);

	useEffect(() => {
		const getPoints = async () => {
			const url = new URL(`https://api-factory.simbirsoft1.com/api/db/point`);
			const headers = {
				"X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
			};
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const points = data.data.filter(point => point.cityId);
				setPoints(points);
			}
		};

		getPoints();
	}, []);

	return (
		<div className="order-process-content__step location-step">
			<form className="location-step__forms">
				<label>
					<span className="location-step__label">Город</span>

					<Autocomplete
						options={citiesSelectFrom}
						forcePopupIcon={false}
						id="debug"
						onChange={onCityChange}
						renderInput={(params) => (
							<TextField {...params} placeholder="Начните вводить город..." />
						)}
					/>
				</label>

				<label>
					<span className="location-step__label">Пункт выдачи</span>

					<Autocomplete
						options={addressesSelectFrom}
						forcePopupIcon={false}
						id="debug"
						onChange={onPointChange}
						renderInput={(params) => (
							<TextField {...params} placeholder="Начните вводить пункт..." />
						)}
					/>
				</label>
			</form>

			<div className="location-step__select-point">
				<p>Выбрать на карте:</p>

				<YMaps>
					<Map
						defaultState={{ center: [54.31, 48.39], zoom: 13 }}
						className={
							props.menuActive
								? "location-step__map location-step__map_disabled"
								: "location-step__map location-step__map_active"
						}
					>
						<Placemark
							geometry={[54.3335, 48.384285]}
							options={{
								preset: "islands#darkGreenCircleDotIcon",
							}}
						/>
						<Placemark
							geometry={[54.300985, 48.288264]}
							options={{
								preset: "islands#darkGreenCircleDotIcon",
							}}
						/>
						<Placemark
							geometry={[54.320883, 48.399934]}
							options={{
								preset: "islands#darkGreenCircleDotIcon",
							}}
						/>
					</Map>
				</YMaps>
			</div>
		</div>
	);
}
