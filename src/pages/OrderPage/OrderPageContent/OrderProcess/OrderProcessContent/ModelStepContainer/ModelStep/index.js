import React, { useState, useEffect } from 'react';

import './style.scss';

export default function ModelStep(props) {
	const { modelType, setModelType } = props;

	const [error, setError] = useState('');
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const url = new URL(
				`https://api-factory.simbirsoft1.com/api/db/category`
			);
			const headers = {
				'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
			};
			const response = await fetch(url, { headers });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				console.log(error);
			} else {
				const dataCategories = data.data.map((category) => category.name);
				setCategories(dataCategories);
			}
		};

		getCategories();
	}, [error]);

	const onModelTypeChange = (e) => {
		setModelType(e.currentTarget.value);
	};

	return (
		<div className='order-process-content__step model-step'>
			<ul className='model-step__category-list'>
				<li className='model-step__category-item'>
					<input
						className='model-step__radio'
						type='radio'
						name='modelType'
						id='Все модели'
						value='Все модели'
						checked={modelType === 'Все модели'}
						onChange={onModelTypeChange}
					/>
					<label className='model-step__label' for='Все модели'>
						Все модели
					</label>
				</li>

				{categories.map((category, index) => (
					<li className='model-step__category-item'>
						<input
							className='model-step__radio'
							type='radio'
							name='modelType'
							id={category}
							value={category}
							checked={modelType === category}
							onChange={onModelTypeChange}
						/>
						<label className='model-step__label' for={category}>
							{category}
						</label>
					</li>
				))}
			</ul>
			{/* <label className='model-step__label'>
				<input
					className='model-step__radio'
					type='radio'
					name='modelType'
					value='Все модели'
					checked={modelType === 'Все модели'}
					onChange={onModelTypeChange}
				/>
				Все модели
			</label> */}

			{/* {categories.map((category, index) => (
				<label key={index} className='model-step__label'>
					<input
						className='model-step__radio'
						type='radio'
						name='modelType'
						value={category}
						checked={modelType === category}
						onChange={onModelTypeChange}
					/>
					{category}
				</label>
			))} */}
		</div>
	);
}
