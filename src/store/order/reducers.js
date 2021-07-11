import {
  CHANGE_CITY_DATA,
  CHANGE_POINT_DATA,
  CHANGE_CATEGORY_DATA,
  CHANGE_CAR_DATA,
  CHANGE_COLOR,
  CHANGE_RESERVATION_FROM,
  CHANGE_RESERVATION_TO,
} from './actions';

const extrasDefaultState = {
  color: null,
  reservationTime: {
    from: null,
    to: null,
  },
  service: {
    isFullTank: false,
  },
};

const defaultState = {
  cityData: null,
  pointData: null,
  categoryData: null,
  carData: {
    updatedAt: 1624278517256,
    createdAt: 1601326749562,
    name: 'Lamborgini, Gallardo',
    description: 'Тестовый тест',
    number: 'o000oo',
    priceMax: 100000,
    priceMin: 9000,
    categoryId: {
      name: 'Спорт',
      description: 'Турбо моторы и масло на доливку в багажнике',
      id: '5fd91add935d4e0be16a3c4b',
    },
    thumbnail: {
      size: 250513,
      originalname: 'Без названия (1).png',
      mimetype: 'image/png',
      path: '/files/5fe5ef22935d4e0be16a408f_Без_названия__1_.png',
    },
    tank: 23,
    colors: ['Красная', 'Зеленная', 'Фиолетовый'],
    id: '5f724e9db710ec1273839d0e',
  },
  extras: extrasDefaultState,
};

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CITY_DATA:
      return {
        ...state,
        cityData: action.payload,
        pointData: null,
        categoryData: null,
        carData: null,
      };
    case CHANGE_POINT_DATA:
      return {
        ...state,
        pointData: action.payload,
        categoryData: null,
        carData: null,
      };
    case CHANGE_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
        carData: null,
      };
    case CHANGE_CAR_DATA:
      return {
        ...state,
        carData: action.payload,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        extras: { ...state.extras, color: action.payload },
      };
    case CHANGE_RESERVATION_FROM:
      return {
        ...state,
        extras: {
          ...state.extras,
          reservationTime: {
            ...state.extras.reservationTime,
            from: action.payload,
          },
        },
      };
    case CHANGE_RESERVATION_TO:
      return {
        ...state,
        extras: {
          ...state.extras,
          reservationTime: {
            ...state.extras.reservationTime,
            to: action.payload,
          },
        },
      };
    default:
  }
  return state;
};
