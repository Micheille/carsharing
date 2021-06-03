import React, { useEffect, useState, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
	SERVER,
	HEADERS,
	DB_GET_CITIES,
	DB_GET_POINTS,
	YMAPS_API_KEY,
} from '../../../../../../../components/App/api';

import './style.scss';

export default function LocationStep(props) {
	const { cityData, setCityData, pointData, setPointData } = props;

	const [cities, setCities] = useState([]);
	const [points, setPoints] = useState([]);
	const [pointsCoords, setPointsCoords] = useState([]);
	const [ymaps, setYmaps] = useState(null);
	const [error, setError] = useState('');

	const getCoords = async (address) => {
		const geocodeResponce = await ymaps.geocode(address);
		const firstGeoObject = geocodeResponce.geoObjects.get(0);
		return firstGeoObject.geometry.getCoordinates();
	};

	const onMapLoad = (ymaps) => {
		setYmaps(ymaps);
	};

	const map = useRef(null);
	const mapState = {
		center: [54.31, 48.39],
		zoom: 13,
	};

	const onCityDataChange = async (event, value) => {
		setCityData(value);
		if (value) {
			const cityCoords = await getCoords(value.name);
			map.current.setCenter(cityCoords, 12, { duration: 300 });
		}
	};

	const onPointDataChange = (event, value) => {
		setPointData(value);
		if (value) {
			const pointWithCoords = pointsCoords.find(
				(pointCoordsItem) => pointCoordsItem.point.id === value.id
			);
			map.current.setCenter(pointWithCoords.coords, map.current.zoom, {
				duration: 300,
			});
		}
	};

	useEffect(() => {}, [pointData]);

	useEffect(() => {
		const headers = HEADERS;

		const getCities = async () => {
			const url = new URL(`${SERVER}${DB_GET_CITIES}`);
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const citiesData = data.data.filter((cityData) => cityData.name);
				setCities(citiesData);
				console.log('use effect cities');
			}
		};

		const getPoints = async () => {
			const url = new URL(`${SERVER}${DB_GET_POINTS}`);
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const pointsData = data.data;
				setPoints(pointsData);
				console.log('use effect points');
			}
		};

		getCities();
		getPoints();
	}, []);

	useEffect(() => {
		const getPointsCoords = async (points) => {
			let pointsCoords = [];
			for (const point of points) {
				const fullAddress = `${point.cityId.name}, ${point.address}`;
				const coords = await getCoords(fullAddress);
				pointsCoords.push({ coords: coords, point: point });
			}
			console.log(pointsCoords);
			setPointsCoords(pointsCoords);
		};

		console.log('use effect get points coords');
		ymaps && getPointsCoords(points);
	}, [ymaps, points]);

	return (
		<div className='order-process-content__step location-step'>
			<form className='location-step__form-container'>
				<label className='location-step__form'>
					<span className='location-step__label'>Город</span>

					<Autocomplete
						options={cities}
						getOptionLabel={(option) => option.name || ''}
						getOptionSelected={(option, value) => option.id === value.id}
						forcePopupIcon={false}
						value={cityData}
						onChange={onCityDataChange}
						renderInput={(params) => (
							<TextField {...params} placeholder='Начните вводить город...' />
						)}
					/>
				</label>

				<label className='location-step__form'>
					<span className='location-step__label'>Пункт выдачи</span>

					<Autocomplete
						options={points?.filter(
							(point) => point.cityId.name === cityData?.name
						)}
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

				<YMaps
					query={{
						ns: 'use-load-option',
						apikey: YMAPS_API_KEY,
						load: 'geocode',
					}}
				>
					<Map
						className={'location-step__map'}
						defaultState={mapState}
						instanceRef={map}
						onLoad={(ymaps) => onMapLoad(ymaps)}
					>
						{pointsCoords.map((coordsItem, index) => (
							<Placemark
								key={index}
								geometry={coordsItem.coords}
								modules={['geoObject.addon.hint']}
								properties={{
									hintContent: coordsItem.point.name,
								}}
								options={{
									preset: 'islands#darkGreenCircleDotIcon',
								}}
								onClick={() => {
									setCityData(coordsItem.point.cityId);
									setPointData(coordsItem.point);
									map.current.setCenter(coordsItem.coords, map.current.zoom, {
										duration: 300,
									});
								}}
							/>
						))}
					</Map>
				</YMaps>
			</div>
		</div>
	);
}