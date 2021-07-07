import React, { useState, useEffect } from 'react';

import {
  SERVER,
  HEADERS,
  DB_GET_CATEGORIES,
  DB_GET_CARS,
  DB_GET_CARS_BY_CATEGORY,
} from '../../../components/App/api';

import './style.scss';

export default function ModelStep(props) {
  const {
    categoryData,
    setCategoryData,
    carData,
    setCarData,
    categories,
    setCategories,
    carsByCategory,
    setCarsByCategory,
  } = props;

  const [error, setError] = useState('');
  // const [categories, setCategories] = useState([]);
  // const [carsByCategory, setCarsByCategory] = useState([]);

  useEffect(() => {
    let cleanupFunction = false;

    const getCategories = async () => {
      const url = new URL(`${SERVER}${DB_GET_CATEGORIES}`);
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const categoriesData = data.data;
        const allCategoriesObject = {
          name: 'Все модели',
          id: '',
        };
        categoriesData.unshift(allCategoriesObject);
        if (!cleanupFunction) {
          setCategoryData(allCategoriesObject);
          setCategories(categoriesData);
        }
      }
    };

    getCategories();

    return () => (cleanupFunction = true);
  }, [setCategoryData, setCategories]);

  useEffect(() => {
    let cleanupFunction = false;

    const getCarsByCategory = async () => {
      const url = categoryData?.id
        ? `${SERVER}${DB_GET_CARS_BY_CATEGORY}${categoryData.id}`
        : `${SERVER}${DB_GET_CARS}`;
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const carsByCategoryData = data.data;
        if (!cleanupFunction) {
          setCarsByCategory(carsByCategoryData);
        }
      }
    };

    getCarsByCategory();

    return () => (cleanupFunction = true);
  }, [categoryData, setCarsByCategory]);

  const onCategoryChange = (e) => {
    const id = e.currentTarget.value;
    const category = categories.find((categoryItem) => categoryItem.id === id);
    setCategoryData(category);
  };

  const normalizeImageLink = (imageLink) => {
    // console.log(imageLink);
    if (typeof imageLink === 'string' && imageLink.match('base64')) {
      return imageLink;
    }
    return `https://api-factory.simbirsoft1.com${imageLink}`;
  };

  return (
    <div className='order-process-content__step model-step'>
      <ul className='model-step__category-list'>
        {categories.map((categoryItem, index) => (
          <li key={index} className='model-step__category-item'>
            <input
              className='model-step__radio'
              type='radio'
              name='category'
              id={categoryItem.name}
              value={categoryItem.id}
              checked={categoryData?.id === categoryItem.id}
              onChange={onCategoryChange}
            />
            <label className='model-step__label' htmlFor={categoryItem.name}>
              {categoryItem.name}
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
                carData?.id === carItem.id
                  ? 'model-step__car-item model-step__car-item_active'
                  : 'model-step__car-item'
              }
              onClick={() => {
                setCarData(carItem);
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
