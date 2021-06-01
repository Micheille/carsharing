import React, { useEffect, useState, useRef } from 'react';
import { Map, Placemark } from 'react-yandex-maps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
	SERVER,
	HEADERS,
	DB_GET_CITIES,
	DB_GET_POINTS_BY_CITY,
} from '../../../../../../../components/App/api';

import './style.scss';

export default function LocationStep(props) {
	const { cityData, setCityData, pointData, setPointData } = props;

	const [cities, setCities] = useState([]);
	const [pointsByCity, setPointsByCity] = useState([]);
	const [error, setError] = useState('');

	const placemarks = [
		{
			city: 'Ульяновск',
			address: 'Гончарова, 27',
			geometry: [54.320883, 48.399934],
		},
		// {
		// 	city: 'Ульяновск',
		// 	address: 'Нариманова 1, корп.2',
		// 	geometry: [54.3335, 48.384285],
		// },
		{
			city: 'Ульяновск',
			address: 'Московское шоссе 34',
			geometry: [54.300985, 48.288264],
		},
	];

	const map = useRef(null);
	const mapState = {
		center: [54.31, 48.39],
		zoom: 13,
	};

	const onCityDataChange = (event, value) => {
		setCityData(value);
	};

	const onPointDataChange = (event, value) => {
		setPointData(value);
		const mark = placemarks.find((mark) => mark.address === value?.address);

		if (mark && map.current) {
			map.current.setCenter(mark.geometry, map.current.zoom, { duration: 300 });
		}
	};

	useEffect(() => {
		const getCities = async () => {
			const url = new URL(`${SERVER}${DB_GET_CITIES}`);
			const headers = HEADERS;
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const citiesData = data.data.filter((cityData) => cityData.name);
				setCities(citiesData);
				console.log('use effect cities');
				console.log(citiesData);
			}
		};

		getCities();
	}, [error]);

	useEffect(() => {
		const getPoints = async () => {
			const url = `${SERVER}${DB_GET_POINTS_BY_CITY}${cityData.id}`;
			const headers = HEADERS;
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const points = data.data;
				console.log('use effect points');
				console.log(points);
				setPointsByCity(points);
			}
		};
		cityData && getPoints();
	}, [cityData]);

	return (
		<div className='order-process-content__step location-step'>
			<form className='location-step__form-container'>
				<label className='location-step__form'>
					<span className='location-step__label'>Город</span>

					<Autocomplete
						options={cities}
						getOptionLabel={(option) => option.name || ''}
						forcePopupIcon={false}
						value={cityData}
						getOptionSelected={(option, value) => option.id === value.id}
						onChange={onCityDataChange}
						renderInput={(params) => (
							<TextField {...params} placeholder='Начните вводить город...' />
						)}
					/>
				</label>

				<label className='location-step__form'>
					<span className='location-step__label'>Пункт выдачи</span>

					<Autocomplete
						options={pointsByCity}
						getOptionLabel={(option) => option.address || ''}
						forcePopupIcon={false}
						value={pointData}
						onChange={onPointDataChange}
						renderInput={(params) => (
							<TextField {...params} placeholder='Начните вводить пункт...' />
						)}
					/>
				</label>
			</form>

			<div className='location-step__map-container'>
				<p className='location-step__map-text'>Выбрать на карте:</p>

				<Map
					defaultState={mapState}
					instanceRef={map}
					className={'location-step__map'}
				>
					{placemarks.map((mark, index) => (
						<Placemark
							key={index}
							geometry={mark.geometry}
							modules={['geoObject.addon.hint']}
							properties={{
								hintContent: mark.address,
							}}
							onClick={(e) => {
								setCityData(cities.find((city) => city.name === mark.city));
								setPointData(
									pointsByCity.find((point) => point.address === mark.address)
								);

								const placemarkCoords = e.get('coords');
								if (map.current) {
									map.current.setCenter(placemarkCoords, map.current.zoom, {
										duration: 300,
									});
								}
							}}
							options={{
								preset: 'islands#darkGreenCircleDotIcon',
							}}
						/>
					))}
				</Map>
			</div>
		</div>
	);
}
