import React, { useState, useEffect } from 'react';

import './style.scss';

export default function ModelStep(props) {
	const { server, categoryId, carId, setCategoryId, setCarId, setCarName } =
		props;

	const [error, setError] = useState('');
	const [categories, setCategories] = useState([]);
	const [carsByCategory, setCarsByCategory] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const url = new URL(`${server}/api/db/category`);
			const headers = {
				'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
			};
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
			} else {
				const dataCategories = data.data;
				dataCategories.unshift({ name: 'Все модели', id: '' });
				setCategories(dataCategories);
			}
		};

		console.log('use effect 1');
		getCategories();
	}, []);

	useEffect(() => {
		const getCarsByCategory = async () => {
			const url = categoryId
				? `${server}/api/db/car?categoryId=${categoryId}`
				: `${server}/api/db/car`;
			const headers = {
				'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
			};
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
			} else {
				const dataCarsByCategory = data.data;
				setCarsByCategory(dataCarsByCategory);
				console.log(dataCarsByCategory);
			}
		};

		console.log('use effect 2');
		getCarsByCategory();
	}, [categoryId]);

	const onCategoryChange = (e) => {
		setCategoryId(e.currentTarget.value);
		setCarName('');
	};

	const normalizeImageLink = (imageLink) => {
		if (imageLink.match('base64')) {
			return imageLink;
		}
		return `https://api-factory.simbirsoft1.com${imageLink}`;
	};

	return (
		<div className='order-process-content__step model-step'>
			<ul className='model-step__category-list'>
				{categories.map((category, index) => (
					<li key={index} className='model-step__category-item'>
						<input
							className='model-step__radio'
							type='radio'
							name='category'
							id={category.name}
							value={category.id}
							checked={categoryId === category.id}
							onChange={onCategoryChange}
						/>
						<label className='model-step__label' htmlFor={category.name}>
							{category.name}
						</label>
					</li>
				))}
			</ul>

			<div className='model-step__car-list-container'>
				<div className='model-step__car-list'>
					{carsByCategory.map((carItem, index) => (
						<div
							key={index}
							className={
								carId === carItem.id
									? 'model-step__car-item model-step__car-item_active'
									: 'model-step__car-item'
							}
							onClick={() => {
								setCarId(carItem.id);
								setCarName(carItem.name);
							}}
						>
							<div className='model-step__car-info'>
								<h3 className='model-step__car-name'>{carItem.name}</h3>
								<p className='model-step__car-price'>{`${carItem.priceMin} - ${carItem.priceMax} ₽`}</p>
							</div>
							<img
								className='model-step__car-image'
								src={`${normalizeImageLink(carItem.thumbnail.path)}`}
								alt=''
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
