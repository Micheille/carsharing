import React, { useEffect, useState, useRef } from "react";
import { Map, Placemark } from "react-yandex-maps";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./style.scss";


export default function LocationStep(props) {
	const { city, point, setCity, setPoint } = props;

	const [points, setPoints] = useState([]);
	const [error, setError] = useState("");

	const placemarks = [
		{
			city: "Ульяновск",
			address: "Гончарова 27",
			geometry: [54.320883, 48.399934],
		},
		{
			city: "Ульяновск",
			address: "Нариманова 1, корп.2",
			geometry: [54.3335, 48.384285],
		},
		{
			city: "Ульяновск",
			address: "Московское шоссе 34",
			geometry: [54.300985, 48.288264],
		},
	];

	const map = useRef(null);
	const mapState = {
		center: [54.31, 48.39],
		zoom: 13,
	};

	let cities = points.map((point) => point.cityId?.name);
	cities = cities.filter(Boolean);
	const citiesSet = new Set(cities);
	let citiesSelectFrom = [...citiesSet];

	const pointsFiltered = points.filter(
		(point) => (point.cityId.name === city)
	);
	const addressesSelectFrom = pointsFiltered.map((point) => point.address);


	const onCityChange = (e) => {
		setCity(e.target.textContent);
	};

	const onPointChange = (e) => {
		const address = e.target.textContent;
		setPoint(address);
		const mark = placemarks.find((mark) => mark.address === address);

		if (mark && map.current) {
			map.current.setCenter(mark.geometry, map.current.zoom, { duration: 300 });
		}
	};
	

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
				const points = data.data.filter((point) => point.cityId);
				setPoints(points);
			}
		};

		getPoints();
	}, [error]);

	return (
		<div className="order-process-content__step location-step">
			<form className="location-step__forms">
				<label>
					<span className="location-step__label">Город</span>

					<Autocomplete
						options={citiesSelectFrom}
						forcePopupIcon={false}
						value={city}
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
						defaultValue=''
						value={point}
						onChange={onPointChange}
						renderInput={(params) => (
							<TextField {...params} placeholder="Начните вводить пункт..." />
						)}
					/>
				</label>
			</form>

			<div className="location-step__select-point">
				<p>Выбрать на карте:</p>

				<Map
					defaultState={mapState}
					instanceRef={map}
					className={"location-step__map"}
				>
					{placemarks.map((mark, index) => (
						<Placemark
							key={index}
							geometry={mark.geometry}
							modules={["geoObject.addon.hint"]}
							properties={{
								hintContent: mark.address,
							}}
							onClick={(e) => {
								setCity(mark.city);
								setPoint(mark.address);

								const placemarkCoords = e.get("coords");
								if (map.current) {
									map.current.setCenter(placemarkCoords, map.current.zoom, {
										duration: 300,
									});
								}
							}}
							options={{
								preset: "islands#darkGreenCircleDotIcon",
							}}
						/>
					))}
				</Map>
			</div>
		</div>
	);
}
